import { Component, OnInit, Output } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  private readonly maxRetries: number = 15;
  private retriesCount = 0;

  @Output() playerName: string;
  @Output() mySocketId: string;
  @Output() progress = 0;
  @Output() headerMessage = 'Connecting to server...';

  constructor(private socketService: SocketService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.playerName = params['playerName'];
      if (this.playerName === 'undefined') {
        this.playerName = null;
      }
    });
    this.socketService.connect();
    setTimeout(() => this.checkConnection(), 1000);
  }

  onMySocketId(mySocketId: string) {
    this.mySocketId = mySocketId;
  }

  checkConnection() {
    if (this.socketService.isConnected()) {
      this.headerMessage = null;
    } else if (this.retriesCount < this.maxRetries) {
      this.retriesCount++;
      this.progress = (100 / this.maxRetries) * this.retriesCount;
    } else {
      this.headerMessage = 'Connection failed';
    }
    setTimeout(() => this.checkConnection(), 1000);
  }
}
