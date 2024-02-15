import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/data/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VotingComponent } from './voting/voting.component';
import { CardComponent } from './components/card/card.component';
import { DetailVoteComponent } from './pages/detail-vote/detail-vote.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
