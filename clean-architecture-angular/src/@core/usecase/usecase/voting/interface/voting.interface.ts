export interface VoteDTO {
  event_code: string;
  category_code:     string;
  nomination_code:   string;
  nomination_keyword: string;
  vote_point:      number;
  reason_vote:     string;
  send_greetings:  string;
}

export interface GetPercentageDTO {
  is_categorized: boolean;
  event_code: string;
}

export interface GetDetailNominateDTO {
  event: string;
  id_category: string;
}

export interface GetEventDTO {
  event_code: string;
}

export interface GetGiveawayDTO {
  giveaway_code: string;
}