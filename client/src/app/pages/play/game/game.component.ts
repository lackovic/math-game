import { Component, OnInit, Output } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Output() header = 'You are connected to the server. Waiting for a challenge...';
  @Output() theAnswer: boolean;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.onMessage()
      .subscribe((question: string) => {
    this.theAnswer = null;
    this.header = question;
      });
  }

  answer(theAnswer: boolean) {
    this.theAnswer = theAnswer;
    console.log(theAnswer);
  }

}
