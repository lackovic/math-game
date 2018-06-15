import { Player } from './models/player';
import { GameServer } from './game-server';
import { Randomizer } from './randomizer';

export class GameEngine {

  private readonly roundSeconds: number = 10;
  private readonly waitSeconds: number = 5;
  private readonly percentageOfCorrectAnswers = 50;

  private readonly waitMessage = 'Waiting for the next challenge...';

  private isSolutionCorrect: boolean;
  private isGameOpen: boolean = false;
  public players: Player[] = [];
  private totalPlayers: number = 0;

  constructor(private gameServer: GameServer) { }

  addPlayer(socketId: string) {
    let newPlayer: Player = {
      socketId: socketId,
      name: "Player " + ++this.totalPlayers,
      score: 0
    };
    this.players.push(newPlayer);
    if (this.players.length == 1) {
      this.endGame();
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

  newGame() {
    if (this.players.length > 0) {
      this.isGameOpen = true;
      console.log('Starting new game');
      let challenge = this.getRandomChallenge();
      console.log('Generated challenge = %s', challenge);
      this.gameServer.emitChallenge(challenge);
      setTimeout(() => this.endGame(), this.roundSeconds * 1000);
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

  endGame() {
    this.isGameOpen = false;
    if (this.players.length > 0) {
      console.log('Restarting in %s seconds', this.waitSeconds);
      console.log('------------------------');
      this.gameServer.emitChallenge(this.waitMessage);
      setTimeout(() => this.newGame(), this.waitSeconds * 1000);
    } else {
      console.log('Ending game');
      console.log('------------------------');
    }
  }

  solutionFromPlayer(solution: boolean, playerId: string) {
    if (this.isGameOpen && solution == this.isSolutionCorrect) {
      // TODO +1 to this player
      this.endGame();
    } else {
      // TODO -1 to this player
    }
  }
}
