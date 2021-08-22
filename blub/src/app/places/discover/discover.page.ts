import { Component, OnInit, OnDestroy } from '@angular/core';
//import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { Subscription } from 'rxjs';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy{
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];
  relevantPlaces: Place[];
  isLoading = false;
  private placesSub: Subscription;

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController,
    private authservice: AuthService
    ) { }

  ngOnInit() {
    this.placesSub = this.placesService.places.subscribe(places => {
      this.loadedPlaces = places;
      this.relevantPlaces = places;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
      console.log('1');
    });
  }

  ionViewWillEnter(){
    this.isLoading = true;
    this.placesService.fetchPlaces().subscribe(() =>
    {this.isLoading = false;
      console.log('2');}
    );
  }

  onOpenMenu(){
    this.menuCtrl.toggle();
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    if(event.detail.value === 'all'){
      this.relevantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    } else {
      this.relevantPlaces = this.loadedPlaces.filter(
        place => place.userId !== this.authservice.userId
      );
      this.listedLoadedPlaces = this.relevantPlaces.slice(1);
    }
    console.log(event.detail);
  }

  ngOnDestroy(){
    if(this.placesSub) {
      this.placesSub.unsubscribe();
      console.log('3');
    }
  }

}
