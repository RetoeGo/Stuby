import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';

import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy{

  loadedBookings: Booking[];
  isLoading = false;
  private bookingSub: Subscription;

  constructor(private bookingsService: BookingsService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.bookingSub = this.bookingsService.bookings.subscribe(bookings => {
      this.loadedBookings = bookings;
    });
  }
  ionViewWillEnter(){
    this.isLoading = true;
    this.bookingsService.fetchBookings().subscribe( () =>
      this.isLoading = false
    );

  }

  ngOnDestroy(){
    if (this.bookingSub) {
      this.bookingSub.unsubscribe();
    }
  }

  onCancelBooking(bookingId: string, slidingEl: IonItemSliding){
    slidingEl.close();
    this.loadingCtrl.create({message: 'Canceling...'}).then(loadingEl => {
      loadingEl.present();
      this.bookingsService.cancelBooking(bookingId).subscribe(() =>
      loadingEl.dismiss()
      );
    });

  }
}
