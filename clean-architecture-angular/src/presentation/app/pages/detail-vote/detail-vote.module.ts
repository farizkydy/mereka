import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailVoteComponent } from './detail-vote.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DetailVoteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: ':categoryId/:nominationId', component: DetailVoteComponent}
    ]),
  ]
})
export class DetailVoteModule { }
