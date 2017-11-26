import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class DatabaseService {

  $issues = new ReplaySubject<any[]>(1);

  constructor(private db: AngularFirestore) {

  }

  getIssues(): void {
    this.db.collection('issues').valueChanges().subscribe(
      data => {
        if (data != null) {
          this.$issues.next(data);
        }
      }
    );
  }
}
