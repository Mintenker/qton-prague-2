import { CommentModel } from './comment.model';
import { ResultModel } from './result.model';
import { StatusType } from './mocks';

export interface ProjectModel {
  id: number;
  name: string;
  status: StatusType;
  location: string;
  budget: number;
  budgetCurrency: string;
  description: string;
  longDescription: string;
  category: string;
  issues?: {
    fkIssue?: number;
    comments?: CommentModel[];
  }[];
  solutions?: {
    fkSolution?: number;
    comments?: CommentModel[];
    result?: ResultModel;
  }[];
  documents?: {
    name: string;
    link: string;
  }[];
}
