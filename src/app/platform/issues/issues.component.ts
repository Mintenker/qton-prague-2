import { Component } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';
import { IssueModel } from '../../shared/issue.model';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
  providers: [DatabaseService],
})
export class IssuesComponent {

  issues: IssueModel[] = [];

  constructor(private service: DatabaseService) {
    this.service.getIssues();

    this.service.$issues.subscribe(
      data => {
        this.issues = data;
      }
    );
  }

  getKeywords(issue: IssueModel): string[] {
    if (issue.keywords == null) {
      return [];
    }
    return Object.keys(issue.keywords).map((key: string) => issue.keywords[key]);
  }
}
