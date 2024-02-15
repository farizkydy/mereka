import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from 'src/@core/domain/voting.entity';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardData: any = [];
  @Output() voteNominate: EventEmitter<string> = new EventEmitter<string>();
  @Output() infoNominate: EventEmitter<any> = new EventEmitter<any>();

  vote(e: any) {
    this.voteNominate.emit(e);
  }

  info(e: any) {
    this.infoNominate.emit(e);
  }
}
