import { Component, OnInit, Output } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  private readonly maxRetries: number = 4;
  private retriesCount = 0;
  @Output() progress = 0;

  @Output() headerMessage = 'Connecting to server...';

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    // TODO Send player's name
    // socket.client['nickname'] = data.name;
    this.socketService.connect();
    setTimeout(() => this.checkConnection(), 1000);
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
