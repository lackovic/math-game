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

  addPlayer(socketId: string, playersName: string) {
    if (this.availableSlots > 0) {
      if (!playersName) {
        playersName = "Player " + ++this.totalPlayers
      }
      console.log('Player %s joined the game', socketId);
      this.availableSlots--;
      const newPlayer: Player = {
        socketId: socketId,
        name: playersName,
        score: 0
      };
      this.players.push(newPlayer);
      if (this.players.length === 1) {
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
    if (this._gameEngine.isAnswerCorrect(answer)) {
      if (this._gameEngine.isRoundOpen) {
        console.log('Player %s answer "%s" is correct', playerId, answer);
        this.updatePlayerScore(playerId, 1);
        this._gameEngine.endRound(this._gameEngine.round);
      }
    } else {
      console.log('Player %s answer "%s" is wrong', playerId, answer);
      this.updatePlayerScore(playerId, -1);
      this._gameServer.wrongAnswer(playerId);
    }
    console.log("Scoreboard:")
    this.players.forEach(player => {
      console.log("%s score = %s", player.name, player.score);
    });
  }

  areTherePlayers(): boolean {
    return this.players.length > 0
  }

}
