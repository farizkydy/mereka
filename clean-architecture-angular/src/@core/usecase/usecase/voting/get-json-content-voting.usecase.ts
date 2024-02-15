import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VotingJsonResponse } from 'src/@core/domain/voting.entity';
import { VotingRepository } from 'src/@core/repository/voting.repository';
import { UseCase } from 'src/base/use-case';

@Injectable({
  providedIn: 'root'
})
export class GetJsonContentVotingUsecase implements UseCase<null, VotingJsonResponse> {
  constructor(private votingRepository: VotingRepository) {}

  execute(): Observable<VotingJsonResponse> {
    return this.votingRepository.GetJsonContentVoting();
  }
}
