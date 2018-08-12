import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './pages/error404/error404.component';
import { GameComponent } from './pages/play/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';
import { PlayersComponent } from './pages/play/players/players.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Error404Component,
        GameComponent,
        HomeComponent,
        PlayComponent,
        PlayersComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        NgbModule.forRoot(),
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
