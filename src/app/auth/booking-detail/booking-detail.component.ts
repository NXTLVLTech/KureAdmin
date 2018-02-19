import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css'],
  providers: [AngularFireDatabase]
})
export class BookingDetailComponent implements OnInit {

  books: FirebaseListObservable<any[]>;
   delete_id:any;
  delete_key:any;
  url_id:any;
  constructor(public authService: AuthService,private route: ActivatedRoute,private bookService: BookService,
  private location: Location,private db: AngularFireDatabase) {

  }

  ngOnInit():void {
   const id = this.route.snapshot.params.id;
   this.url_id = id;
   this.books = this.db.list('/bookings/'+id);
   console.log(this.books);

  }

  delete_modal(id){
  this.delete_id = this.url_id+'/'+id;
  this.delete_key = id;
  console.log(this.delete_id);

  }

  delete(id){
  console.log(id);
  this.books.remove(id);
  window.location.reload();


  }




}
