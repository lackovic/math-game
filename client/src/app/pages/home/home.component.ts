import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  playerName: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  join() {
    this.router.navigate(['game', this.playerName]);
  }

}
