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
      this.addPlayer(socket.id);
      socket.on('answer', (answer: boolean) => {
        console.log('Received answer %s from client %s', answer, socket.id);
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
    console.log('Client %s connected', id);
    this.gameEngine.addPlayer(id);
    // this.broadcastPlayersList();
  }

  removePlayer(id: string) {
    if (this.gameEngine.removePlayer(id)) {
      console.log('Client ' + id + ' disconnected');
      // this.broadcastPlayersList();
    }
  }

  getApp(): express.Application {
    return this.app;
  }

  startRound(round: number, challenge: string) {
    console.log('Starting round with challenge = %s', challenge);
    this.io.emit('startRound', round, challenge);
  }

  endRound() {
    console.log('Ending round');
    this.io.emit('endRound');
  }

  gameFull(socketId) {
    console.log('Sending gameFull to client %s', socketId);
    setTimeout(() => this.io.sockets.connected[socketId].emit('gameFull'), 1000);
  }

}
