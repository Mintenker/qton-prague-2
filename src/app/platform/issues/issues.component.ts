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
  keywords: {
    [column: string]: {
      n: number;
      val: string;
    }
  };

  constructor(private service: DatabaseService) {
    this.service.getIssues();
    this.service.getKeywords();

    this.service.$issues.subscribe(
      data => {
        this.issues = data;
      }
    );

    this.service.$keywords.subscribe(
      data => {
        this.keywords = data;
      }
    );
  }

  getKeywords(issue: IssueModel): string[] {
    if (issue.keywords == null) {
      return [];
    }
    if (this.keywords == null) {
      return issue.keywords;
    }
    return issue.keywords.map(keyword => this.keywords[keyword])
      .sort((x, y) => x.n - y.n)
      .slice(0, 10)
      .map(item => item.val);
  }
}
