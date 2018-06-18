import { GameServer } from './game-server';
import { Randomizer } from './randomizer';
import { PlayersManager } from './players-manager';

export class GameEngine {

  public readonly roundSeconds: number = 10;
  public readonly breakSeconds: number = 5;
  private readonly percentageOfCorrectAnswers = 50;

  private _isSolutionCorrect: boolean;

  private _isRoundOpen: boolean = false;
  private _round: number = 0;

  private _gameServer: GameServer;
  private _playersManager: PlayersManager;

  get isRoundOpen(): boolean {
    return this._isRoundOpen;
  }

  get round(): number {
    return this._round;
  }

  set gameServer(gameServer) {
    this._gameServer = gameServer;
  }

  set playersManager(playersManager) {
    this._playersManager = playersManager;
  }

  startRound(round: number) {
    if (this._playersManager.areTherePlayers()) {
      this._isRoundOpen = true;
      console.log('Starting round #%s', this._round);
      const challenge = this.getRandomChallenge();
      this._gameServer.startRound(round, challenge);
      setTimeout(() => this.endRound(round), this.roundSeconds * 1000);
    }
  }

  getRandomChallenge(): string {
    const arithmeticOperation = Randomizer.getRandomArithmeticOperation();
    let solution = eval(arithmeticOperation);
    this._isSolutionCorrect = Math.floor(Math.random() * 100) < this.percentageOfCorrectAnswers;
    if (!this._isSolutionCorrect) {
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
    if (round === this._round) {
      this._isRoundOpen = false;
      if (this._playersManager.areTherePlayers()) {
        console.log('Ending round #%s', this._round);
        this._round++;
        console.log('------------------------');
        this._gameServer.endRound();
        setTimeout(() => this.startRound(this._round), this.breakSeconds * 1000);
      } else {
        console.log('Round #%s ended', this._round);
        console.log('------------------------');
      }
    }
  }

  isAnswerCorrect(answer: boolean): boolean {
    return answer === this._isSolutionCorrect;
  }

  resetRoundNumber() {
    this._round = 0;
  }

}
