import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private roundSeconds: number;
  private breakSeconds: number;

  @Input() playerName: string;

  @Output() challenge;
  @Output() isRoundOpen: boolean;
  @Output() isGameFull: boolean;
  @Output() error = false;
  @Output() isAnswerWrong: boolean;
  @Output() progress: number;
  @Output() round: number;
  @Output() mySocketId = new EventEmitter<string>();

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
        this.isGameFull = true;
      });
    this.socketService.onError()
      .subscribe(() => {
        this.isRoundOpen = false;
        this.error = true;
      });
    this.socketService.onWrongAnswer()
      .subscribe(() => {
        this.isAnswerWrong = true;
      });
    this.socketService.onGameJoined()
      .subscribe((params) => {
        this.roundSeconds = params['roundSeconds'];
        this.breakSeconds = params['breakSeconds'];
        this.mySocketId.emit(params['socketId']);
        this.endRound();
      });
    this.socketService.joinGame(this.playerName);
  }

  answer(answer: boolean) {
    this.socketService.sendAnswer(answer);
  }

  startRound(round: number, challenge: string) {
    this.isRoundOpen = true;
    this.isAnswerWrong = false;
    this.round = round;
    this.challenge = challenge;
    this.moveProgress(this.roundSeconds, true, round);
  }

  moveProgress(remainingSeconds: number, isRoundOpen: boolean, myRound: number) {
    if (isRoundOpen === this.isRoundOpen && myRound === this.round) {
      const totalSeconds = this.isRoundOpen ? this.roundSeconds : this.breakSeconds;
      this.progress = (100 / totalSeconds) * remainingSeconds;
      if (remainingSeconds > 0) {
        remainingSeconds--;
        setTimeout(() => this.moveProgress(remainingSeconds, isRoundOpen, myRound), 1000);
      }
    }
  }

  endRound() {
    this.isAnswerWrong = false;
    this.isRoundOpen = false;
    this.moveProgress(this.breakSeconds, false, this.round);
  }

}
