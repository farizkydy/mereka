import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDetailNominateVote, VotingJson } from 'src/@core/domain/voting.entity';
import { GetDetailNominateDTO } from 'src/@core/usecase/interface/voting.interface';
import { GetDetailNominateVotingUsecase } from 'src/@core/usecase/usecase/voting/get-detail-nominate-vote.usecase';
import { GetJsonContentVotingUsecase } from 'src/@core/usecase/usecase/voting/get-json-content-voting.usecase';

@Component({
  selector: 'app-detail-vote',
  templateUrl: './detail-vote.component.html',
  styleUrls: ['./detail-vote.component.scss']
})
export class DetailVoteComponent implements OnInit {

  nominationId: string | null = '';
  voteDetailRes!: GetDetailNominateVote;
  categoryId: string | null = '';
  dataJsonContent!: VotingJson;
  isError: boolean = false;
  constructor(
    private getDetailNominateVotingUsecase: GetDetailNominateVotingUsecase,
    private activatedRoute: ActivatedRoute,
    private getJsonContentVotingUsecase: GetJsonContentVotingUsecase
  ) { 
    this.categoryId = this.activatedRoute.snapshot.paramMap.get('categoryId');
    this.nominationId = this.activatedRoute.snapshot.paramMap.get('nominationId');
  }

  ngOnInit(): void {
    this.getJsonContent();
  }

  getJsonContent() {
    this.getJsonContentVotingUsecase.execute().subscribe((res) => {
      this.dataJsonContent = res.data;
      this.getDetailNominate();
    });
  }

  getDetailNominate() {
    const param: GetDetailNominateDTO = {
      event: this.dataJsonContent.event_code,
      id_category: this.dataJsonContent.type
    };
    this.getDetailNominateVotingUsecase.execute(param).subscribe((res) => {
      this.isError = false;
      this.voteDetailRes = res.data;
    }, () => {
      this.isError = true;
    });
  }
}
