import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VotingComponent } from './voting.component';



@NgModule({
  declarations: [
    VotingComponent
  ],
  // this imports can use standalone concept. so we only use it in components if we use latest angular version
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', 
        component: VotingComponent 
      }
    ]),
  ]
})
export class VotingModule { }
