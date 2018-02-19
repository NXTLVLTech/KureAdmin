import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AngularFireDatabase]
})
export class HomeComponent implements OnInit {
  firstName = '';
  lastName = '';
  phoneNumber = '';
  email = '';
  age = '';
  uid = '';
  profileLink = '';
  users: FirebaseListObservable<any[]>;
  delete_id: string;
  delete_key: string;
  login_email: string;

 constructor(public authService: AuthService, db: AngularFireDatabase) {

  this.users = db.list('/users');
  this.login_email = authService.currentUserName;

 }



 onSubmit() {
   this.users.push({firstName: this.firstName, lastName: this.lastName, phoneNumber: this.phoneNumber,
     email: this.email, age: this.age, uid: this.uid, profileLink: this.profileLink});
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.email = '';
    this.age = '';
    this.uid = '';
    this.profileLink = '';

  }

  ngOnInit() {
  }

  delete_modal(id)
  {
    this.delete_id = id;
    this.delete_key = id;
  }

  delete(id)
  {
    this.users.remove(id);
    window.location.reload();
  }
  logout() {
    this.authService.signOut();
  }
}
