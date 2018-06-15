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

  @Output() equation;
  @Output() isRoundOpen: boolean;
  @Output() progress: number;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    this.socketService.onStartRound()
      .subscribe((question: string) => {
        this.startRound(question);
      });
    this.socketService.onEndRound()
      .subscribe(() => {
        this.endRound();
      });
    this.endRound();
  }

  answer(answer: boolean) {
    this.socketService.send(answer);
    this.endRound();
  }

  startRound(equation: string) {
    this.isRoundOpen = true;
    this.equation = equation;
    this.moveProgress(this.roundSeconds, this.isRoundOpen);
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
    this.moveProgress(this.waitSeconds, this.isRoundOpen);
  }

}
