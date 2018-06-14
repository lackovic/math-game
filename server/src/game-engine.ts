import { Player } from './models/player';
import { GameServer } from './game-server';
import { Randomizer } from './randomizer';

export class GameEngine {

  private readonly roundSeconds: number = 10;
  private readonly waitSeconds: number = 5;
  private readonly percentageOfCorrectAnswers = 50;

  private readonly waitMessage = 'Waiting for the next challenge...';

  private answer: boolean;
  public players: Player[] = [];
  private totalPlayers: number = 1;

  constructor(private gameServer: GameServer) { }

  addPlayer(socketId: string) {
    let newPlayer: Player = {
      socketId: socketId,
      name: "Player " + this.totalPlayers++,
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

  newGame(): any {
    if (this.players.length > 0) {
      console.log('Starting new game');
      let arithmeticOperation = Randomizer.generateRandomArithmeticOperation();
      let solution = eval(arithmeticOperation);
      this.answer = Math.floor(Math.random() * 100) < this.percentageOfCorrectAnswers;
      if (!this.answer) {
        solution += Randomizer.generateRandomDeviation(solution);
      }
      let fullQuestion = arithmeticOperation + ' = ' + solution;
      console.log('Generated question = %s', fullQuestion);
      this.gameServer.emitQuestion(fullQuestion);
      setTimeout(() => this.endGame(), this.roundSeconds * 1000);
    }
  }

  endGame(): any {
    if (this.players.length > 0) {
      console.log('Restarting in %s seconds', this.waitSeconds);
      console.log('------------------------');
      this.gameServer.emitQuestion(this.waitMessage);
      setTimeout(() => this.newGame(), this.waitSeconds * 1000);
    } else {
      console.log('Ending game');
      console.log('------------------------');
    }
  }
}
