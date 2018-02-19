import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import { PipeTransform, Pipe } from '@angular/core';



import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AuthService} from './auth/auth.service';
import {BookService} from './auth/book.service';

import {environment} from '../environments/environment';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { BookingComponent } from './auth/booking/booking.component';
import { PushNotificationComponent } from './auth/push-notification/push-notification.component';
import { BookingDetailComponent } from './auth/booking-detail/booking-detail.component';
import { EditComponent } from './auth/edit/edit.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { EditBookingComponent } from './auth/edit-booking/edit-booking.component';
import { KeysPipePipe } from './pipes/keys-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookingComponent,
    PushNotificationComponent,
    BookingDetailComponent,
    EditComponent,
    CamelCasePipe,
    EditBookingComponent,
    KeysPipePipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, BookService],
  bootstrap: [AppComponent]
})

export class AppModule {}
