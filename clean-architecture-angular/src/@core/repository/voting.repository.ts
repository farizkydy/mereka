import { Observable } from 'rxjs';
import { GetDetailNominateVoteResponse, GetListNominateVoteResponse, VotingJsonResponse } from '../domain/voting.entity';
import { GetDetailNominateDTO } from '../usecase/interface/voting.interface';

export abstract class VotingRepository {
  abstract GetJsonContentVoting(): Observable<VotingJsonResponse>;
  abstract GetListNominateVoting(param: string): Observable<GetListNominateVoteResponse>;
  abstract GetDetailNominateVoting(param: GetDetailNominateDTO): Observable<GetDetailNominateVoteResponse>;
}
