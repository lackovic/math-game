import { createServer, Server } from 'http';
import * as express from 'express';
import * as socketIo from 'socket.io';
import { Player } from './models/player';

export class Game {

  private readonly roundSeconds: number = 10;
  private readonly waitSeconds: number = 5;
  // private currentQuestion: string;
  // private currentAnswer: boolean;
  private timer;
  public players: Player[] = [];
  private totalPlayers: number = 1;

  constructor() { }

  addPlayer(socketId: string) {
    let newPlayer: Player = {
      socketId: socketId,
      name: "Player " + this.totalPlayers++,
      score: 0
    };
    this.players.push(newPlayer);
    if (this.players.length == 1) {
      this.newGame();
    }
  }

  removePlayer(socketId: string): boolean {
    if (this.players.length > 0) {
      let player: Player = this.players.filter(p => p.socketId == socketId)[0];
      if (player != null) {
        this.players = this.players.filter(p => p !== player);
        return true;
      }
    }
    return false;
  }

  startTimer(): any {
    this.timer = setTimeout(() => this.newGame(), this.roundSeconds * 1000);
  }

  newGame(): any {
    this.startTimer();
  }
}
