import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {

  $issues = new ReplaySubject<any[]>(1);
  $keywords = new ReplaySubject<any>(1);

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

  postSource(s: string): any {
    this.db.collection('sources').doc(s).set({
      source: s,
    });
  }

  getSources(): any {
    return this.db.collection('sources').valueChanges();
  }

  getComplete(): any {
    return this.db.collection('complete').valueChanges();
  }

  getKeywords(): void {
    this.db.collection('keywords').snapshotChanges().subscribe(
      data => {
        if (data != null) {
          const result: any = {};
          data.forEach(item => {
            result[item.payload.doc.id] = item.payload.doc.data();
          });
          this.$keywords.next(result);
        }
      }
    );
  }
}

