import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { GameEngine } from './game-engine';

export class GameServer {

  public static readonly PORT: number = 4300;

  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;

  private gameEngine = new GameEngine(this);

  constructor() {
    this.initServer();
    this.startServer();
    this.get();
  }

  private initServer() {
    this.app = express();
    this.port = process.env.PORT || GameServer.PORT;
    this.server = createServer(this.app);
    this.io = socketIo(this.server);
    console.log('Math game server initialized');
  }

  private get() {
    this.app.get('/', function (req, res) {
      res.send('Math game server is up and running!');
    });
  }

  private startServer() {

    this.server.listen(this.port, () => {
      console.log('Math game server listening on port %s', this.port);
    });

    this.io.on('connect', (socket: any) => {
      console.log('Player %s connected', socket.id);
      socket.on('joinGame', () => {
        this.addPlayer(socket.id);
      });
      socket.on('answer', (answer: boolean) => {
        this.gameEngine.answerFromPlayer(answer, socket.id);
      });
      socket.on('disconnect', () => {
        this.removePlayer(socket.id);
      });
    });
  }

  // broadcastPlayersList() {
  //   this.io.sockets.emit('message', this.gameEngine.players);
  //   console.log('Connected players = %s', this.gameEngine.players.length);
  // }

  addPlayer(id: string) {
    console.log('Player %s wants to join the game', id);
    this.gameEngine.addPlayer(id);
  }

  removePlayer(id: string) {
    if (this.gameEngine.removePlayer(id)) {
      console.log('Player ' + id + ' left the game');
      // this.broadcastPlayersList();
    }
  }

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

  gameJoined(socketId, roundSeconds: number, breakSeconds: number) {
    console.log('Sending join confirmation to player %s', socketId);
    this.io.sockets.connected[socketId].emit('gameJoined', roundSeconds, breakSeconds);
  }

  wrongAnswer(socketId) {
    console.log('Sending wrong answer to player %s', socketId);
    this.io.sockets.connected[socketId].emit('wrongAnswer');
  }

}
