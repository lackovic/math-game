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
      console.log('Math game server listening on port %s', this.port);
    });

    this.io.on('connect', (socket: any) => {
      console.log('Player %s connected', socket.id);

      socket.on('joinGame', () => {
        console.log('Player %s wants to join the game', socket.id);
        this._playersManager.addPlayer(socket.id);
      });

      socket.on('answer', (answer: boolean) => {
        this._playersManager.answerFromPlayer(answer, socket.id);
      });

      socket.on('disconnect', () => {
        if (this._playersManager.removePlayer(socket.id)) {
          console.log('Player ' + socket.id + ' left the game');
          // this.broadcastPlayersList();
        }
      });
    });
  }

  // broadcastPlayersList() {
  //   this.io.sockets.emit('message', this.gameEngine.players);
  //   console.log('Connected players = %s', this.gameEngine.players.length);
  // }

  getApp(): express.Application {
    return this.app;
  }

  startRound(round: number, challenge: string) {
    console.log('Sending challenge "%s" for new round', challenge);
    this.io.emit('startRound', round, challenge);
  }

  endRound() {
    this.io.emit('endRound');
  }

  gameFull(socketId) {
    console.log('Sending gameFull to player %s', socketId);
    this.io.sockets.connected[socketId].emit('gameFull');
  }

  gameJoined(socketId) {
    console.log('Sending join confirmation to player %s', socketId);
    this.io.sockets.connected[socketId].emit('gameJoined', this._gameEngine.roundSeconds, this._gameEngine.breakSeconds);
  }

  wrongAnswer(socketId) {
    console.log('Sending wrong answer to player %s', socketId);
    this.io.sockets.connected[socketId].emit('wrongAnswer');
  }

  emitPlayers(players: Player[]) {
    this.io.emit('players', players);
  }

}
