import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Output() secondsToGameStart = 5;

  constructor() { }

  ngOnInit() {
  }

}
