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

  private connectedPlayers: string[] = [];

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
    console.log('Math game server initialized');
  }

  private get(): void {
    this.app.get('/', function (req, res) {
      res.send('Math game server is up and running!');
    });
  }

  private startServer(): void {

    this.server.listen(this.port, () => {
      console.log('Math game server listening on port %s', this.port);
    });


    this.io.on('connect', (socket: any) => {

      //setTimeout(() => socket.disconnect(true), 5000);

      console.log('Client %s connected. Connection status = %s', socket.id, socket.connected);
      this.addPlayer(socket.id);
      console.log('Connected players = %s', this.connectedPlayers.length);

      socket.on('message', () => {
        console.log('Received empty message from client %s', socket.id);
      });

      socket.on('message', (string: string) => {
        console.log('Received "%s" from client %s', string, socket.id);
        //JSON.stringify(a)
      });

      socket.on('disconnect', () => {
        console.log('Client ' + socket.id + ' disconnected');
        this.removePlayer(socket.id);
        console.log('Connected players = %s', this.connectedPlayers.length);
      });
    });
  }

  broadcastPlayersList() {
    this.io.sockets.emit('playerListChange', this.connectedPlayers);
  }

  addPlayer(id: string) {
    this.connectedPlayers.push(id);
    this.broadcastPlayersList();
  }

  removePlayer(id: string) {
    var index = this.connectedPlayers.indexOf(id, 0);
    if (index > -1) {
      this.connectedPlayers.splice(index, 1);
      this.broadcastPlayersList();
    }
  }

  getApp(): express.Application {
    return this.app;
  }
}
