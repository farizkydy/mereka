import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryNomination, GetDetailNominateVote, GetListPrecentageVote, VotingJson } from 'src/@core/domain/voting.entity';
import { GetJsonContentVotingUsecase } from 'src/@core/usecase/usecase/voting/get-json-content-voting.usecase';
import { GetListNominateVotingUsecase } from 'src/@core/usecase/usecase/voting/get-list-nominate-vote.usecase';
import { GetPercentageVotingUsecase } from 'src/@core/usecase/usecase/voting/get-percentage-vote.usecase';
import { GetPercentageDTO } from 'src/@core/usecase/usecase/voting/interface/voting.interface';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {
  dataNominateVote: CategoryNomination[] = [];
  dataPercentageVote: GetListPrecentageVote[] = [];
  dataJsonContent!: VotingJson;
  isError: boolean = false;
  daysRemaining: number = 0;
  isEndPeriode: boolean = false;

  constructor(
    private getJsonContentVotingUsecase: GetJsonContentVotingUsecase,
    private getListNominateVotingUsecase: GetListNominateVotingUsecase,
    private getPercentageVoteUseCase: GetPercentageVotingUsecase,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.getJsonContent()
  }

  getJsonContent() {
    this.getJsonContentVotingUsecase.execute().subscribe((res) => {
      this.dataJsonContent = res.data;
      this.countDays(this.dataJsonContent.end_date);
      if (this.daysRemaining > 0) {
        this.getListNominate();
      } else {
        this.isEndPeriode = true;
        this.getPercentageResult();
      }
    }, () => {
      this.isError = true;
    })
  }

  getListNominate() {
    this.getListNominateVotingUsecase.execute(this.dataJsonContent.event_code).subscribe((res) => {

      this.dataNominateVote = res.data.Categories;
    }, () => {
      this.isError = true;
    });
  }

  getPercentageResult() {
    const payload: GetPercentageDTO = {
      is_categorized: false,
      event_code: this.dataJsonContent.event_code
    };
    this.getPercentageVoteUseCase.execute(payload).subscribe((res) => {
      this.dataPercentageVote = res.data;
    }, () => {
      this.isError = true;
    });
  }

  countDays(end_date: string) {
    // Mendapatkan tanggal target dalam format "dd-mm-yyyy"
    const endDateParts = end_date.split('-');
    const day = parseInt(endDateParts[0], 10);
    const month = parseInt(endDateParts[1], 10) - 1; // Perhatikan pengurangan 1 karena indeks bulan dimulai dari 0
    const year = parseInt(endDateParts[2], 10);
  
    // Membuat objek Date untuk tanggal target
    const targetDate = new Date(year, month, day);
  
    // Menghitung selisih waktu antara tanggal target dan tanggal saat ini
    const today = new Date();
    const timeDifference = targetDate.getTime() - today.getTime();
  
    // Menghitung berapa hari tersisa
    this.daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  }

  goToDetailPage(categoryId: string, e: any) {
    this.route.navigate([`nomination-list/${this.dataJsonContent.event_code}/detail/${categoryId}/${e.nomination_code}`]);
  }

}
