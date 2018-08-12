import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRoutingModule } from '../../app-routing.module';
import { Error404Component } from '../error404/error404.component';
import { HomeComponent } from './home.component';
import { PlayComponent } from '../play/play.component';
import { GameComponent } from '../play/game/game.component';
import { PlayersComponent } from '../play/players/players.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Error404Component,
        GameComponent,
        HomeComponent,
        PlayComponent,
        PlayersComponent
      ],
      imports: [
        FormsModule,
        NgbModule.forRoot(),
        AppRoutingModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
