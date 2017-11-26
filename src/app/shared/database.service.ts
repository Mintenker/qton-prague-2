import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class DatabaseService {

  $issues = new ReplaySubject<any[]>(1);
  $keywords = new ReplaySubject<any>(1);
  $sources = new ReplaySubject<any[]>(1);

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

  getSources(): void {
    this.db.collection('complete').valueChanges().subscribe(
      data => {
        if (data != null) {
          this.$sources.next(data);
        }
      }
    );
  }

  createSource(url: string): void {
    this.db.collection('sources').doc(url).set({source: url});
  }

}

