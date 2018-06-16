import { Component, OnInit, Output } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private roundSeconds: number;
  private breakSeconds: number;

  @Output() challenge;
  @Output() isRoundOpen: boolean;
  @Output() isGameFull: boolean;
  @Output() isAnswerWrong: boolean;
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
    this.socketService.onWrongAnswer()
      .subscribe(() => {
        this.isAnswerWrong = true;
        console.log('Answer wrong');
      });
    this.socketService.onGameJoined()
      .subscribe((params) => {
        console.log('Game joined');
        this.roundSeconds = params['roundSeconds'];
        this.breakSeconds = params['breakSeconds'];
        this.endRound();
      });
    this.socketService.joinGame();
  }

  answer(answer: boolean) {
    this.socketService.sendAnswer(answer);
  }

  startRound(round: number, challenge: string) {
    this.isRoundOpen = true;
    this.isAnswerWrong = false;
    this.round = round;
    this.challenge = challenge;
    this.moveProgress(this.roundSeconds, true);
  }

  moveProgress(remainingSeconds: number, myRound: boolean) {
    if (myRound === this.isRoundOpen) {
      const totalSeconds = this.isRoundOpen ? this.roundSeconds : this.breakSeconds;
      this.progress = (100 / totalSeconds) * remainingSeconds;
      if (remainingSeconds > 0) {
        remainingSeconds--;
        setTimeout(() => this.moveProgress(remainingSeconds, myRound), 1000);
      }
    }
  }

  endRound() {
    this.isAnswerWrong = false;
    this.isRoundOpen = false;
    this.moveProgress(this.breakSeconds, false);
  }

}
