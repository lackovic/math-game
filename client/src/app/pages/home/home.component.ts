import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private readonly timeoutSeconds: number = 3;

  constructor(private socketService: SocketService, private router: Router) { }

  ngOnInit() {
  }

  join() {
    this.socketService.connect();
    const timer = setTimeout(() => this.checkConnection(), this.timeoutSeconds * 1000);
    this.router.navigate(['game']);
  }

  checkConnection(): any {
    if (!this.socketService.isConnected()) {
      this.router.navigate(['connectionError']);
    }
  }

}
