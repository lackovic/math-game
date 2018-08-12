import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as socketIo from 'socket.io-client';
import { Player } from '../models/Player';

import { ServerConfig } from './server-config';

declare var require: any;
const config: ServerConfig = require('../../assets/server-config.json');

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;

  constructor() { }

  connect() {
    let serverUrl = config.url;
    if (config.port) {
      serverUrl += ':' + config.port;
    }
    console.log('Connecting to %s', serverUrl);
    this.socket = socketIo(serverUrl);
  }

  isConnected(): boolean {
    return this.socket.connected;
  }

  joinGame(playerName: string) {
    this.socket.emit('joinGame', playerName);
  }

  sendAnswer(answer: boolean) {
    if (this.socket != null) {
      this.socket.emit('answer', answer);
    } else {
      console.log('Error: send failed because socket is not initialized');
    }
  }

  disconnect() {
    if (this.socket != null) {
      this.socket.disconnect();
    } else {
      console.log('Error: disconnect failed because socket is not initialized');
    }
  }

  onStartRound(): Observable<{ round: number, challenge: string }> {
    return new Observable<{ round: number, challenge: string }>(observer => {
      this.socket.on('startRound', (round: number, challenge: string) => observer.next({ round, challenge }));
    });
  }

  onEndRound(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('endRound', () => observer.next());
    });
  }

  onGameFull(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('gameFull', () => observer.next());
    });
  }

  onWrongAnswer(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('wrongAnswer', () => observer.next());
    });
  }

  onGameJoined(): Observable<{ roundSeconds: number, breakSeconds: number, socketId: string }> {
    return new Observable<{ roundSeconds: number, breakSeconds: number, socketId: string }>(observer => {
      this.socket.on('gameJoined', (roundSeconds: number, breakSeconds: number, socketId: string) =>
        observer.next({ roundSeconds, breakSeconds, socketId }));
    });
  }

  onPlayers(): Observable<Player[]> {
    return new Observable<Player[]>(observer => {
      this.socket.on('players', (players: Player[]) => observer.next(players));
    });
  }
}
