import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayComponent } from './pages/play/play.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { GameComponent } from './pages/play/game/game.component';
import { PlayersComponent } from './pages/play/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    HomeComponent,
    Error404Component,
    GameComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
