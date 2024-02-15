import { Observable } from 'rxjs';
import { GetDetailNominateVoteResponse, GetListNominateVoteResponse, GetListPrecentageVoteResponse, VotingJsonResponse } from '../domain/voting.entity';
import { GetDetailNominateDTO } from '../usecase/interface/voting.interface';
import { GetPercentageDTO } from '../usecase/usecase/voting/interface/voting.interface';

export abstract class VotingRepository {
  abstract GetJsonContentVoting(): Observable<VotingJsonResponse>;
  abstract GetListNominateVoting(param: string): Observable<GetListNominateVoteResponse>;
  abstract GetDetailNominateVoting(param: GetDetailNominateDTO): Observable<GetDetailNominateVoteResponse>;
  abstract GetPercentageVote(params: GetPercentageDTO): Observable<GetListPrecentageVoteResponse>;
}
