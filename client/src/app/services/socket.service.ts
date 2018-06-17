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

  public connect() {
    let serverUrl = config.url;
    if (config.port) {
      serverUrl += ':' + config.port;
    }
    this.socket = socketIo(serverUrl);
  }

  public isConnected(): boolean {
    return this.socket.connected;
  }

  public joinGame() {
    this.socket.emit('joinGame');
  }

  public sendAnswer(answer: boolean) {
    if (this.socket != null) {
      this.socket.emit('answer', answer);
    } else {
      console.log('Error: send failed because socket is not initialized');
    }
  }

  public disconnect() {
    if (this.socket != null) {
      this.socket.disconnect();
    } else {
      console.log('Error: disconnect failed because socket is not initialized');
    }
  }

  public onStartRound(): Observable<{ round: number, challenge: string }> {
    return new Observable<{ round: number, challenge: string }>(observer => {
      this.socket.on('startRound', (round: number, challenge: string) => observer.next({ round, challenge }));
    });
  }

  public onEndRound(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('endRound', () => observer.next());
    });
  }

  public onGameFull(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('gameFull', () => observer.next());
    });
  }

  public onWrongAnswer(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('wrongAnswer', () => observer.next());
    });
  }

  public onGameJoined(): Observable<{ roundSeconds: number, breakSeconds: number }> {
    return new Observable<{ roundSeconds: number, breakSeconds: number }>(observer => {
      this.socket.on('gameJoined', (roundSeconds: number, breakSeconds: number) => observer.next({ roundSeconds, breakSeconds }));
    });
  }

  public onPlayers(): Observable<Player[]> {
    return new Observable<Player[]>(observer => {
      this.socket.on('players', (players: Player[]) => observer.next(players));
    });
  }
}
