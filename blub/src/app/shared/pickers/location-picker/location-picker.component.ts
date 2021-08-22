import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { ModalController, ActionSheetController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { MapModalComponent } from '../../map-modal/map-modal.component';
import { environment } from '../../../../environments/environment';
import { getMissingNgModuleMetadataErrorData } from '@angular/compiler';
import { map, switchMap } from 'rxjs/operators';
import { PlaceLocation, Coordinates } from '../../../places/location.model';
import { of } from 'rxjs';
import { Capacitor } from '@capacitor/core';
import { Geolocation} from '@capacitor/geolocation';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss'],
})
export class LocationPickerComponent implements OnInit {
  @Output() locationPick = new EventEmitter<PlaceLocation>();
  @Input() showPreview = false;
  selectedLocationImage: string;
  isLoading = false;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController
    ) { }

  ngOnInit() {}
  onPickLocation() {
    this.actionSheetCtrl.create({
      header: 'Please Choose',
      buttons: [
        {text: 'Auto-Locate', handler: () => {
          this.locateUser();
        }},
        {text: 'Pick on Map', handler: () => {
          this.openMap();
        }},
        {text: 'Cancel', role: 'cancel'},
      ]
    }).then(actionSheetEl => actionSheetEl.present());
  }

  private async locateUser() {
    if(!Geolocation){
      this.showErrorAlert();
      return;
    }
    this.isLoading =true;
    /*
    const test = await Geolocation.getCurrentPosition();
    console.log('Current position:', test);
    const coordinates: Coordinates = {
      lat: test.coords.latitude,
      lng: test.coords.longitude
    };
    this.createPlace(coordinates.lat, coordinates.lng);

    */
    Geolocation.getCurrentPosition().then(geoPosition => {
      //this.isLoading = false;
      console.log(geoPosition);
      const coordinates: Coordinates = {
        lat: geoPosition.coords.latitude,
        lng: geoPosition.coords.longitude
      };
      this.createPlace(coordinates.lat, coordinates.lng);
      this.isLoading = false;
    }).catch(err => {

      console.log(err);
      this.showErrorAlert();
    });
  }

  private createPlace(lat: number, lng: number) {
    const pickedLocation: PlaceLocation = {
      lat,
      lng,
      address: null,
      staticMapImageUrl: null
    };
    this.isLoading = true;
        this.getAddress(lat, lng).pipe(
          switchMap(address => {
            pickedLocation.address = address;
            return of(this.getMapImage(pickedLocation.lat, pickedLocation.lng, 14));
        })).subscribe(staticMapImageUrl => {
          pickedLocation.staticMapImageUrl = staticMapImageUrl;
          this.selectedLocationImage = staticMapImageUrl;
          this.locationPick.emit(pickedLocation);
        });
  }

  private showErrorAlert() {
    this.alertController.create({
      header: 'Could not fetch location',
      message: 'Please use the map to pick a location!',
      buttons: ['Okay']
    }).then(alertEl => {alertEl.present(); this.isLoading = false;});
  }

  private openMap() {
    this.modalCtrl.create({
      component: MapModalComponent
    }).then(modalEl => {
      modalEl.onDidDismiss().then(modalData => {
        if (!modalData.data) {
          return;
        }
        const coordinates: Coordinates = {
          lat: modalData.data.lat,
          lng: modalData.data.lng
        };
        this.createPlace(coordinates.lat, coordinates.lng);
        });
        modalEl.present();
      });
  }

  private getAddress(lat: number, lng: number) {
    return this.http.get<any>(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${environment.googleMapsAPIKey}`
      ).pipe(map(geoData => {
        if(!geoData || !geoData.results || geoData.results.length === 0) {
          return null;
        }
        return geoData.results[0].formatted_address;
      }));
  }

  private getMapImage(lat: number, lng: number, zoom: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=500x300&maptype=roadmap
    &markers=color:red%7Clabel:Place%7C${lat},${lng}
    &key=${environment.googleMapsAPIKey}`;
  }

}
