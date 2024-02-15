import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetListPrecentageVoteResponse } from 'src/@core/domain/voting.entity';
import { VotingRepository } from 'src/@core/repository/voting.repository';
import { UseCase } from 'src/base/use-case';
import { GetPercentageDTO } from './interface/voting.interface';

@Injectable({
  providedIn: 'root'
})
export class GetPercentageVotingUsecase implements UseCase<GetPercentageDTO, GetListPrecentageVoteResponse> {
  constructor(private votingRepository: VotingRepository) {}

  execute(params: GetPercentageDTO): Observable<GetListPrecentageVoteResponse> {
    return this.votingRepository.GetPercentageVote(params);
  }
}
