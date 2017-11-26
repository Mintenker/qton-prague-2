import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  constructor(private db: AngularFirestore) {

  }

  getIssues(): Observable<any> {
    return this.db.collection('issues').valueChanges();
  }
}
