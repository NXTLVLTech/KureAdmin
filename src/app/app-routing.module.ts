import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './auth/home/home.component';
import { BookingComponent } from './auth/booking/booking.component';
import { PushNotificationComponent } from './auth/push-notification/push-notification.component';
import { BookingDetailComponent } from './auth/booking-detail/booking-detail.component';
import {EditComponent} from "./auth/edit/edit.component";
import {EditBookingComponent} from "./auth/edit-booking/edit-booking.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'push', component: PushNotificationComponent},
  {path: 'booking-detail/:id', component: BookingDetailComponent},
  {path: 'edit/user/:id', component: EditComponent},
  {path: 'edit/booking/:id/:key', component: EditBookingComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
