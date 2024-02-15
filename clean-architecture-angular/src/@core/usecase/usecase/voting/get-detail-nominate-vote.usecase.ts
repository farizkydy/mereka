import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDetailNominateVoteResponse } from 'src/@core/domain/voting.entity';
import { VotingRepository } from 'src/@core/repository/voting.repository';
import { UseCase } from 'src/base/use-case';
import { GetDetailNominateDTO } from './interface/voting.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDetailNominateVotingUsecase implements UseCase<GetDetailNominateDTO, GetDetailNominateVoteResponse> {
  constructor(private votingRepository: VotingRepository) {}

  execute(param: GetDetailNominateDTO): Observable<GetDetailNominateVoteResponse> {
    return this.votingRepository.GetDetailNominateVoting(param);
  }
}
