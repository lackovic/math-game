import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayComponent } from './play.component';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SocketService } from '../../services/socket.service';

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;
  let socketService: SocketService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PlayComponent
      ],
      imports: [
        FormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        SocketService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    socketService = TestBed.get(SocketService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should try to connect with the server', () => {
    const connect = spyOn(socketService, 'connect');
    fixture.detectChanges();
    expect(connect).toHaveBeenCalled();
  });
});
