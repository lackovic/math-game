import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { PlayersManager } from './players-manager';
import { GameEngine } from './game-engine';
import { Player } from './models/player';

export class GameServer {

  public static readonly PORT: number = 4300;

  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;

  private _gameEngine: GameEngine;
  private _playersManager: PlayersManager;

  constructor() {
    this.initServer();
    this.startServer();
    this.get();
  }

  set gameEngine(gameEngine) {
    this._gameEngine = gameEngine;
  }

  set playersManager(playersManager) {
    this._playersManager = playersManager;
  }

  private initServer() {
    this.app = express();
    this.port = process.env.PORT || GameServer.PORT;
    this.server = createServer(this.app);
    this.io = socketIo(this.server);
    console.log('Math game server initialized');
  }

  private get() {
    this.app.get('/', function (request, response) {
      response.send('Math game server is up and running!');
    });
  }

  private startServer() {

    this.server.listen(this.port, () => {
      console.log(`Math game server listening on port ${this.port}`);
    });

    this.io.on('connect', (socket: any) => {
      console.log(`Player ${socket.id} connected`);

      socket.on('joinGame', (playerName: string) => {
        try {
          this._playersManager.addPlayer(socket.id, playerName);
        } catch (err) {
          this.error(err);
        }
      });

      socket.on('answer', (answer: boolean) => {
        try {
          this._playersManager.answerFromPlayer(answer, socket.id);
        } catch (err) {
          this.error(err);
        }
      });

      socket.on('disconnect', () => {
        try {
          if (this._playersManager.removePlayer(socket.id)) {
            console.log(`Player ${socket.id} left the game`);
          }
        } catch (err) {
          this.error(err);
        }
      });
    });
  }

  getApp(): express.Application {
    return this.app;
  }

  startRound(round: number, challenge: string) {
    console.log(`Sending challenge "${challenge}" for new round`);
    this.io.emit('startRound', round, challenge);
  }

  endRound() {
    this.io.emit('endRound');
  }

  gameFull(socketId) {
    console.log(`Sending gameFull to player ${socketId}`);
    this.io.sockets.connected[socketId].emit('gameFull');
  }

  private error(err) {
    console.log(err);
    this.io.emit('error');
  }

  gameJoined(socketId) {
    console.log(`Sending join confirmation to player ${socketId}`);
    this.io.sockets.connected[socketId].emit('gameJoined', this._gameEngine.roundSeconds, this._gameEngine.breakSeconds, socketId);
  }

  wrongAnswer(socketId) {
    console.log(`Sending wrong answer to player ${socketId}`);
    this.io.sockets.connected[socketId].emit('wrongAnswer');
  }

  emitPlayers(players: Player[]) {
    this.io.emit('players', players);
  }

}
