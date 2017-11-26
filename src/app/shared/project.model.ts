import { CommentModel } from './comment.model';
import { ResultModel } from './result.model';

export interface ProjectModel {
  id: number;
  name: string;
  status: string;
  location: string;
  budget: number;
  budgetCurrency: string;
  description: string;
  longDescription: string;
  issues?: {
    fkIssue: number;
    comments: CommentModel[];
  }[];
  solutions?: {
    fkSolution: number;
    comments: CommentModel[];
    result: ResultModel;
  };
  documents?: {
    name: string;
    link: string;
  }[];
}
