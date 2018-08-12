import { Player } from "./models/player";
import { GameServer } from "./game-server";
import { GameEngine } from "./game-engine";

export
  class PlayersManager {

  public players: Player[] = [];
  private totalPlayers: number = 0;
  private availableSlots: number = 10;

  private _gameEngine: GameEngine;
  private _gameServer: GameServer;

  set gameEngine(gameEngine) {
    this._gameEngine = gameEngine;
  }

  set gameServer(gameServer) {
    this._gameServer = gameServer;
  }

  addPlayer(socketId: string, playerName: string) {
    if (this.availableSlots > 0) {
      if (!playerName) {
        playerName = `Player ${++this.totalPlayers}`;
      }
      console.log(`Player ${socketId} joined the game`);
      this.availableSlots--;
      const newPlayer: Player = {
        socketId: socketId,
        name: playerName,
        score: 0
      };
      this.players.push(newPlayer);
      if (this.players.length === 1) {
        this._gameEngine.resetRoundNumber();
        this._gameEngine.endRound(this._gameEngine.round);
      }
      this._gameServer.gameJoined(socketId);
      this._gameServer.emitPlayers(this.players);
    } else {
      this._gameServer.gameFull(socketId);
    }
  }

  removePlayer(socketId: string): boolean {
    if (this.players.length > 0) {
      this.availableSlots++;
      const player: Player = this.getPlayer(socketId);
      if (player !== null) {
        this.players = this.players.filter(p => p !== player);
        this._gameServer.emitPlayers(this.players);
        return true;
      }
    }
    return false;
  }

  getPlayer(socketId): Player {
    return this.players.filter(p => p.socketId === socketId)[0];
  }

  updatePlayerScore(socketId, variation: number) {
    const player = this.getPlayer(socketId);
    if (player !== null) {
      player.score += variation;
      this._gameServer.emitPlayers(this.players);
    }
  }

  answerFromPlayer(answer: boolean, playerId: string) {
    let playerAnswer;
    if (this._gameEngine.isAnswerCorrect(answer)) {
      if (this._gameEngine.isRoundOpen) {
        playerAnswer = 'correct';
        this.updatePlayerScore(playerId, 1);
        this._gameEngine.endRound(this._gameEngine.round);
      } else {
        playerAnswer = 'too late';
      }
    } else {
      playerAnswer = 'wrong';
      this.updatePlayerScore(playerId, -1);
      this._gameServer.wrongAnswer(playerId);
    }
    console.log(`Player ${playerId} answer "${answer}" is ${playerAnswer}`);
    console.log('Scoreboard:')
    this.players.forEach(player => {
        console.log(`${player.name} score = ${player.score}`);
    });
  }

  areTherePlayers(): boolean {
    return this.players.length > 0
  }

}
