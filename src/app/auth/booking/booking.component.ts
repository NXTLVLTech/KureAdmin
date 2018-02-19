import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable ,FirebaseObjectObservable} from "angularfire2/database-deprecated";
import { PipeTransform, Pipe } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [AngularFireDatabase]
})


export class BookingComponent implements OnInit {

bookings: FirebaseListObservable<any[]>;
delete_id:any;
constructor(public authService: AuthService,db: AngularFireDatabase) {

this.bookings = db.list('/bookings');
   
let i : number = 1;


 }

  ngOnInit() {
  }

   logout() {
    this.authService.signOut();
  }

  delete_modal(id){
  this.delete_id = id;
   }

  delete(id){
  console.log(id);
  this.bookings.remove(id);
  window.location.reload();
  }

}
