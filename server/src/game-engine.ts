import { Player } from './models/player';
import { GameServer } from './game-server';
import { Randomizer } from './randomizer';

export class GameEngine {

  private readonly roundSeconds: number = 10;
  private readonly breakSeconds: number = 5;
  private readonly percentageOfCorrectAnswers = 50;

  private isSolutionCorrect: boolean;

  private isRoundOpen: boolean = false;
  private round: number = 0;

  public players: Player[] = [];
  private totalPlayers: number = 0;
  private availableSlots: number = 10;

  constructor(private gameServer: GameServer) { }

  addPlayer(socketId: string) {
    if (this.availableSlots > 0) {
      console.log('Player %s joined the game', socketId);
      this.availableSlots--;
      let newPlayer: Player = {
        socketId: socketId,
        name: "Player " + ++this.totalPlayers,
        score: 0
      };
      this.players.push(newPlayer);
      if (this.players.length == 1) {
        this.endRound(this.round);
      }
      this.gameServer.gameJoined(socketId, this.roundSeconds, this.breakSeconds);
      // this.broadcastPlayersList();
    } else {
      this.gameServer.gameFull(socketId);
    }
  }

  removePlayer(socketId: string): boolean {
    if (this.players.length > 0) {
      this.availableSlots++;
      let player: Player = this.players.filter(p => p.socketId == socketId)[0];
      if (player != null) {
        this.players = this.players.filter(p => p !== player);
        return true;
      }
    }
    return false;
  }

  startRound(round: number) {
    if (this.players.length > 0) {
      this.isRoundOpen = true;
      console.log('Starting round #%s', this.round);
      let challenge = this.getRandomChallenge();
      this.gameServer.startRound(round, challenge);
      setTimeout(() => this.endRound(round), this.roundSeconds * 1000);
    }
  }

  getRandomChallenge(): string {
    let arithmeticOperation = Randomizer.getRandomArithmeticOperation();
    let solution = eval(arithmeticOperation);
    this.isSolutionCorrect = Math.floor(Math.random() * 100) < this.percentageOfCorrectAnswers;
    if (!this.isSolutionCorrect) {
      solution += Randomizer.getPlausibleRandomDeviation(solution);
    }
    if (!this.isInteger(solution)) {
      solution = solution.toFixed(2);
    }
    return arithmeticOperation + ' = ' + solution;
  }

  isInteger(n) {
    return n % 1 === 0;
  }

  endRound(round: number) {
    if (round == this.round) {
      this.isRoundOpen = false;
      if (this.players.length > 0) {
        console.log('Ending round #%s', this.round);
        this.round++;
        console.log('------------------------');
        this.gameServer.endRound();
        setTimeout(() => this.startRound(this.round), this.breakSeconds * 1000);
      } else {
        console.log('Round #%s ended', this.round);
        console.log('------------------------');
      }
    }
  }

  answerFromPlayer(answer: boolean, playerId: string) {
    if (answer == this.isSolutionCorrect) {
      if (this.isRoundOpen) {
        console.log('Player %s answer "%s" is correct', playerId, answer);
        // TODO +1 to this player
        this.endRound(this.round);
      }
    } else {
      console.log('Player %s answer "%s" is wrong', playerId, answer);
      // TODO -1 to this player
    }
  }
}
