import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { WaitComponent } from './pages/game/wait/wait.component';
import { PlayersComponent } from './pages/game/players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    Error404Component,
    WaitComponent,
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
