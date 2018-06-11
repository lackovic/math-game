import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/Player';
import { forEach } from '@angular/router/src/utils/collection';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  maxPlayers = 10;

  players: Player[] = [];

  constructor(private socketService: SocketService) {
    this.initPlayers();
  }

  ngOnInit() {
  }

  initPlayers() {
    const numPlayers = Math.floor((Math.random() * this.maxPlayers) + 1);
    for (let i = 1; i < numPlayers; i++) {
      this.players.push({
        id: i,
        name: 'Player ' + i,
        score: Math.floor((Math.random() * 30))
      });
    }
    const you = {
      id: numPlayers,
      name: 'You',
      score: Math.floor((Math.random() * 30))
    };
    this.players.push(you);
    this.players = this.players.sort((a, b) => b.score - a.score);
  }

  exit() {
    if (this.socketService != null) {
      this.socketService.disconnect();
    }
  }
}
