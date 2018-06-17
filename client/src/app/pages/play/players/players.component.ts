import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/Player';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  private players: Player[] = [];

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.onPlayers()
      .subscribe(players => {
        this.players = players;
        this.players = this.players.sort((a, b) => b.score - a.score);
      });
  }

  exit() {
    if (this.socketService != null) {
      this.socketService.disconnect();
    }
  }
}
