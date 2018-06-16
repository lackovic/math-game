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
  @Output() isGameFull: boolean;
  @Output() progress: number;
  @Output() round: number;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.onStartRound()
      .subscribe(params => {
        this.startRound(params['round'], params['challenge']);
      });
    this.socketService.onEndRound()
      .subscribe(() => {
        this.endRound();
      });
    this.socketService.onGameFull()
      .subscribe(() => {
        console.log('The game is full');
        this.isGameFull = true;
      });
    this.socketService.joinGame();
    this.endRound();
  }

  answer(answer: boolean) {
    this.socketService.sendAnswer(answer);
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
