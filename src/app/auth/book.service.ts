import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Book } from './book';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable } from "angularfire2/database-deprecated";
@Injectable()
export class BookService {
item: any = null;

private basePath: string = 'https://dummy-test-6ae4f.firebaseio.com/bookings';



  constructor(private db: AngularFireDatabase) {
    console.log(this.db.list('bookings'));
  }


getbook(key: any): FirebaseObjectObservable<Book> {
  const itemPath =  `${this.basePath}/${key}`;
  this.item = this.db.object(itemPath)
  return this.item
}


}
