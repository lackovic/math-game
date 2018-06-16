import { Player } from './models/player';
import { GameServer } from './game-server';
import { Randomizer } from './randomizer';

export class GameEngine {

  private readonly roundSeconds: number = 10;
  private readonly waitSeconds: number = 5;
  private readonly percentageOfCorrectAnswers = 50;

  private readonly waitMessage = 'Waiting for the next challenge...';

  private isSolutionCorrect: boolean;
  private isRoundOpen: boolean = false;
  public players: Player[] = [];
  private totalPlayers: number = 0;
  private currentRound: number = 0;

  constructor(private gameServer: GameServer) { }

  addPlayer(socketId: string) {
    // TODO Limit players count to 10
    let newPlayer: Player = {
      socketId: socketId,
      name: "Player " + ++this.totalPlayers,
      score: 0
    };
    this.players.push(newPlayer);
    if (this.players.length == 1) {
      this.endRound(this.currentRound);
    }
  }

  removePlayer(socketId: string): boolean {
    if (this.players.length > 0) {
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
      console.log('Starting new game');
      let challenge = this.getRandomChallenge();
      console.log('Generated challenge = %s', challenge);
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
    if (round == this.currentRound) {
      this.isRoundOpen = false;
      if (this.players.length > 0) {
        console.log('Restarting in %s seconds', this.waitSeconds);
        console.log('------------------------');
        this.gameServer.endRound();
        setTimeout(() => this.startRound(++this.currentRound), this.waitSeconds * 1000);
      } else {
        console.log('Ending game');
        console.log('------------------------');
      }
    }
  }

  answerFromPlayer(solution: boolean, playerId: string) {
    if (this.isRoundOpen && solution == this.isSolutionCorrect) {
      // TODO +1 to this player
      this.endRound(this.currentRound);
    } else {
      // TODO -1 to this player
    }
  }
}
