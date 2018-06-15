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
      socket.on('message', (solution: boolean) => {
        console.log('Received %s message from client %s', solution, socket.id);
        this.gameEngine.solutionFromPlayer(solution, socket.id);
      });
      socket.on('disconnect', () => {
        this.removePlayer(socket.id);
      });
    });
  }

  broadcastPlayersList() {
    this.io.sockets.emit('message', this.gameEngine.players);
    console.log('Connected players = %s', this.gameEngine.players.length);
  }

  addPlayer(id: string) {
    console.log('Client %s connected', id);
    this.gameEngine.addPlayer(id);
    this.broadcastPlayersList();
  }

  removePlayer(id: string) {
    if (this.gameEngine.removePlayer(id)) {
      console.log('Client ' + id + ' disconnected');
      this.broadcastPlayersList();
    }
  }

  getApp(): express.Application {
    return this.app;
  }

  emitChallenge(question: string): any {
    console.log('Sending message = %s', question);
    this.io.emit('message', question);
  }

}
