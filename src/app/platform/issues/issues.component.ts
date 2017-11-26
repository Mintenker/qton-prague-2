import { Component } from '@angular/core';
import { DatabaseService } from '../../shared/database.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
  providers: [DatabaseService],
})
export class IssuesComponent {

  constructor(private service: DatabaseService) {
    this.service.getIssues().subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
