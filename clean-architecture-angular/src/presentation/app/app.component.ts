import { Component, OnInit } from '@angular/core';
import { GetJsonContentVotingUsecase } from 'src/@core/usecase/usecase/voting/get-json-content-voting.usecase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clean-architecture-angular';

  constructor(
    private getJsonContentVotingUsecase: GetJsonContentVotingUsecase
  ) {}

  ngOnInit(): void {
    this.getJsonContent()
  }

  getJsonContent() {
    this.getJsonContentVotingUsecase.execute().subscribe((res) => {
      console.log('res', res);
    })
  }
}
