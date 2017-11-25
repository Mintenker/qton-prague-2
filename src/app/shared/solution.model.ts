import { ResultModel } from './result.model';
import { CommentModel } from './comment.model';

export interface SolutionModel {
  id: string;
  vendor: string;
  description: string;
  comments: CommentModel[];
  historicalResults?: ResultModel[];
}
