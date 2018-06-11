import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { Game } from './game';

export class GameServer {

  public static readonly PORT: number = 4300;

  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
  private port: string | number;

  private game = new Game(this);

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

      this.addPlayer(socket.id);

      socket.on('message', () => {
        console.log('Received empty message from client %s', socket.id);
      });

      socket.on('message', (string: string) => {
        console.log('Received "%s" from client %s', string, socket.id);
        //JSON.stringify(a)
      });

      socket.on('disconnect', () => {
        this.removePlayer(socket.id);
      });
    });
  }

  broadcastPlayersList() {
    this.io.sockets.emit('playerListChange', this.game.players);
    console.log('Connected players = %s', this.game.players.length);
  }

  addPlayer(id: string) {
    console.log('Client %s connected. Connection status = %s', id);
    this.game.addPlayer(id);
    this.broadcastPlayersList();
  }

  removePlayer(id: string) {
    if (this.game.removePlayer(id)) {
      console.log('Client ' + id + ' disconnected');
      this.broadcastPlayersList();
    }
  }

  getApp(): express.Application {
    return this.app;
  }

  emitQuestion(question: string): any {
    console.log('emitting question = %s', question);
    this.io.emit('message', question);
  }

}
