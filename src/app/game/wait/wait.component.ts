import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.css']
})
export class WaitComponent implements OnInit {

  @Output() secondsToGameStart = 5;

  constructor() { }

  ngOnInit() {
  }

}
