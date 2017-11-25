import { ResultModel } from './result.model';
import { CommentModel } from './comment.model';

export interface SolutionModel {
  id: number;
  vendor: string;
  description: string;
  longDescription: string;
  title: string;
  comments: CommentModel[];
  budget: number;
  location: string;
  historicalResults?: ResultModel[];
  image: string;
}
