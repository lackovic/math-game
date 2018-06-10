import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';

export class GameServer {

  public static readonly PORT: number = 4300;

  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;

  // private readonly roundSeconds: number = 10;
  // private readonly waitSeconds: number = 5;
  // private currentQuestion: string;
  // private currentAnswer: boolean;

  constructor() {
    this.initServer();
    this.startServer();
    this.get();
  }

  private initServer(): void {
    this.app = express();
    this.port = process.env.PORT || GameServer.PORT;
    this.server = createServer(this.app);
    this.io = socketIo(this.server);
  }

  private startServer(): void {
    this.server.listen(this.port, () => {
      console.log('Running math game server on port %s', this.port);
    });
  }

  private get(): void {
    this.app.get('/', function (req, res) {
      res.send('Math game server is up and running!');
    });
  }

  private listen(): void {
    this.io.on('connect', (socket: any) => {
      console.log('Connected client on port %s.', this.port);
      socket.on('answer', (a: boolean) => {
        console.log('[server](answer): %s', JSON.stringify(a));
        this.io.emit('answer', a);
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });
  }

  getApp(): express.Application {
    return this.app;
  }
}
