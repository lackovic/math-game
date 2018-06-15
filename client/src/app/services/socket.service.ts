import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:4300';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;

  constructor() { }

  public connect() {
    this.socket = socketIo(SERVER_URL);
  }

  public isConnected(): boolean {
    return this.socket.connected;
  }

  public send(answer: boolean) {
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

  public onStartRound(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('startRound', (question: string) => observer.next(question));
    });
  }

  public onEndRound(): Observable<string> {
    return new Observable<string>(observer => {
      this.socket.on('endRound', () => observer.next());
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
        this.socket.on(event, () => observer.next());
    });
  }
}
