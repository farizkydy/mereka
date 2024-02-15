export interface VotingJsonResponse {
    status: boolean;
    message: string;
    data: VotingJson;
  }
  
  export interface VotingJson {
    end_date:               string;
    entry_background:       EntryBackground;
    entry_header:           EntryHeader;
    event_code:             string;
    recommendation_package: RecommendationPackage;
    result_header:          ResultHeader;
    term_condition:         ResultHeader;
    type:                   string;
    vote_options:           VoteOptions;
    end_voting_header: EndVoting;
    vote_status: VoteStatus;
    voting_form?: VotingPopUp;
    is_show_percentage: boolean;
  }
  
  export interface EntryBackground {
    background_img: string;
  }
  
  export interface EntryHeader {
    banner_img:      string;
    description:     string;
    remaining_label: string;
    title:           string;
    remaining_end_label: string
  }
  
  export interface EndVoting {
    remaining_label: string;
    giveaway_label:  string;
    summarize_vote:  SummarizeVote;
  }
  
  export interface SummarizeVote {
    title: string;
  }
  
  export interface VoteStatus {
    title:         string;
    description:   string;
    button:        ButtonStatus;
    recommend_you: string;
  }
  
  export interface ButtonStatus {
    main:      string;
    primary:   string;
    secondary: string;
  }
  
  
  export interface RecommendationPackage {
    is_show:    boolean;
    package_id: string;
  }
  
  export interface ResultHeader {
    description: string;
    title:       string;
    button?: string;
  }
  
  export interface VoteOptions {
    options: Option[];
    title:   string;
  }
  
  export interface Option {
    label: string;
    value: number;
  }
  
  
  export interface GetListNominateVoteResponse {
    status:  boolean;
    message: string;
    end_date: string;
    data:    GetListNominateVote;
  }
  
  export interface GetListNominateVote {
    Categories: CategoryNomination[];
  }
  
  export interface CategoryNomination {
    category_code:          string;
    title:       string;
    description: string;
    nominations: Nomination[];
  }
  
  export interface Nomination {
    id:        string;
    nomination_name:      string;
    sub_title: string;
    image: string;
    buttons:   Button[];
    details:   DetailsNomination;
  }
  
  export interface Button {
    label: string;
  }
  
  
  export interface DetailsNomination {
    type:        string;
    title:       string;
    description: string;
    buttons:     Button[];
  }
   
  // get list detail
  
  export interface GetDetailNominateVoteResponse {
    status:      boolean;
    status_code: string;
    message:     string;
    data:        GetDetailNominateVote;
  }
  
  export interface GetDetailNominateVote {
    nomination_code: string;
    nomination_name: string;
    sub_title:       string;
    image:           string;
    button:          Button[];
    details:         Details;
  }
  
  export interface Button {
    label: string;
  }
  
  export interface Details {
    keyword:     string;
    description: string;
    buttons:     Button[];
  }
  
  
  export interface VotingPopUp {
    title: string;
    form: VotingForm[];
  }
  
  export interface VotingForm {
    is_mandatory: boolean;
    is_show: boolean;
    label: string;
    placeholder: string;
    id: string;
  }
  
  export interface GetListPrecentageVoteResponse {
    status:      boolean;
    status_code: string;
    status_desc: string;
    data:        GetListPrecentageVote[];
  }
  
  export interface GetListPrecentageVote {
    id:         string;
    name:       string;
    image?: string;
    percentage: number;
  }