import { Component, OnInit, Output } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private readonly roundSeconds: number = 10;
  private readonly waitSeconds: number = 5;

  @Output() challenge;
  @Output() isRoundOpen: boolean;
  @Output() progress: number;
  @Output() round: number;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.onStartRound()
      .subscribe(params => {
        const round = params['round'];
        const challenge = params['challenge'];
        console.log('Received round = %s, challenge = %s', round, challenge);
        this.startRound(round, challenge);
      });
    this.socketService.onEndRound()
      .subscribe(() => {
        this.endRound();
      });
    this.endRound();
  }

  answer(answer: boolean) {
    this.socketService.send(answer);
    this.isRoundOpen = false;
  }

  startRound(round: number, challenge: string) {
    this.isRoundOpen = true;
    this.round = round;
    this.challenge = challenge;
    this.moveProgress(this.roundSeconds, true);
  }

  moveProgress(remainingSeconds: number, myRound: boolean) {
    if (myRound === this.isRoundOpen) {
      const totalSeconds = this.isRoundOpen ? this.roundSeconds : this.waitSeconds;
      this.progress = (100 / totalSeconds) * remainingSeconds;
      if (remainingSeconds > 0) {
        remainingSeconds--;
        setTimeout(() => this.moveProgress(remainingSeconds, myRound), 1000);
      }
    }
  }

  endRound() {
    this.isRoundOpen = false;
    this.moveProgress(this.waitSeconds, false);
  }

}
