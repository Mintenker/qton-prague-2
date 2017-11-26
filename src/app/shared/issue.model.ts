export interface IssueModel {
  keywords: {[column: string]: string};
  status_message: string;
  link_name: string;
  status_type: string;
  status_link: string;
  status_published: string;
  num_reactions: number;
  num_comments: number;
  num_shares: number;
  num_likes: number;
  num_loves: number;
  num_wows: number;
  num_hahas: number;
  num_sads: number;
  num_angrys: number;
  similar: IssueModel[];
}
