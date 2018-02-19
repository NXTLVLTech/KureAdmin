import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database-deprecated";
import {AuthService} from "../auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-booking',
  templateUrl: './edit-booking.component.html',
  styleUrls: ['./edit-booking.component.css']
})
export class EditBookingComponent implements OnInit {

  editable: FirebaseListObservable<any[]>;
  id:string;
  id2:string;
  delete_id: string;
  delete_key: string;
  url_id: string;
  constructor(public authService: AuthService, public db: AngularFireDatabase, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.id2 = this.route.snapshot.params.key;
    this.editable = db.list('/bookings/' + this.id+'/' + this.id2);
    this.url_id = this.id + "/" + this.id2;
    this.editable.forEach(element => {
      console.log(element);
    });
  }

  ngOnInit() {
  }

  delete_modal(id){
    this.delete_id = this.url_id+'/'+id;
    this.delete_key = id;
  }

  delete(id){
    console.log(this.delete_key);
    this.db.object('/bookings/' + this.url_id + "/" + this.delete_key).remove();
    window.location.reload();
  }

  updateValue(key, event) {
    let payload = {
      [key]: event.target.value
    };
    this.db.object('/bookings/' + this.url_id)
    .update(payload);
  }

}
