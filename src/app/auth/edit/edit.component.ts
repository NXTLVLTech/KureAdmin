import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [AngularFireDatabase],
})
export class EditComponent implements OnInit {
  users: FirebaseListObservable<any[]>;
  delete_id: string;
  delete_key: string;
  url_id:any;
  constructor(public authService: AuthService, public db: AngularFireDatabase, private route: ActivatedRoute) {
    const id = this.route.snapshot.params.id;
    this.users = db.list('/users/' + id);
    this.url_id = id;
  }

  ngOnInit() {
  }

  delete_modal(id){
    this.delete_id = this.url_id+'/'+id;
    this.delete_key = id;
    console.log(this.delete_id);

  }

  delete(id){
    console.log(this.delete_key);
    this.db.object('/users/' + this.url_id + "/" + this.delete_key).remove();
    window.location.reload();
  }

  updateValue(key, event) {
    let payload = {
      [key]: event.target.value
    };
    this.db.object('/users/' + this.url_id)
    .update(payload);
  }
}