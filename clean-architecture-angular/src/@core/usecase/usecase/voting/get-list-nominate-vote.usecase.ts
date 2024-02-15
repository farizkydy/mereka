import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListNominateVoteResponse } from 'src/@core/domain/voting.entity';
import { VotingRepository } from 'src/@core/repository/voting.repository';
import { UseCase } from 'src/base/use-case';

@Injectable({
  providedIn: 'root'
})
export class GetListNominateVotingUsecase implements UseCase<string, GetListNominateVoteResponse> {
  constructor(private votingRepository: VotingRepository) {}

  execute(param: string): Observable<GetListNominateVoteResponse> {
    return this.votingRepository.GetListNominateVoting(param);
  }
}
