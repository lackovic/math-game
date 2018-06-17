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

  constructor() { }

  set gameEngine(gameEngine) {
    this._gameEngine = gameEngine;
  }

  set gameServer(gameServer) {
    this._gameServer = gameServer;
  }

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
      let player: Player = this.getPlayer(socketId);
      if (player != null) {
        this.players = this.players.filter(p => p !== player);
        this._gameServer.emitPlayers(this.players);
        return true;
      }
    }
    return false;
  }

  getPlayer(socketId): Player {
    return this.players.filter(p => p.socketId == socketId)[0];
  }

  updatePlayerScore(socketId, variation: number) {
    const player = this.getPlayer(socketId);
    if (player != null) {
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
