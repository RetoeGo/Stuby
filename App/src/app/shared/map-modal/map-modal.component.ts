import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Renderer2, OnDestroy, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
})
export class MapModalComponent implements OnInit, AfterViewInit, OnDestroy{

  @ViewChild('map') mapElementRef: ElementRef;
  @Input() center = { lat: -34.397, lng: 150.644 };
  @Input() selectable = true;
  @Input() closeButtonText = 'Cancel';
  @Input() title = 'Pick Location';
  clickListener: any;
  googleMaps: any;

  constructor(private modalCtrl: ModalController, private renderer: Renderer2) { }


  ngOnInit() {
    //this.modalCtrl.dismiss();
  }

  ngAfterViewInit() {
    console.log('test 5');

    this.getGoogleMaps().then(googleMaps => {
      this.googleMaps = googleMaps;
      const mapEl = this.mapElementRef.nativeElement;
      const map = new googleMaps.Map(mapEl, {
        center: this.center,
        zoom: 16
      });


      this.googleMaps.event.addListenerOnce(map, 'idle', () => {
        this.renderer.addClass(mapEl, 'visible');
      });
      if (this.selectable) {
        this.clickListener = map.addListener('click', event => {
          const selectedCoords = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          };
          this.modalCtrl.dismiss(selectedCoords);
        });
      } else {
        const marker = new googleMaps.marker({
          position: this.center,
          map,
          title: 'Picked Location'
        });
        marker.setMap(map);
      }
    })
    .catch(err => {
      console.log(err);
      console.log('test 6');
      console.log(err);
      console.error('test');

    });
  }

  onCancel(){
    this.modalCtrl.dismiss();
  }

  ngOnDestroy(){
    if(this.clickListener) {
    this.googleMaps.event.removeListener(this.clickListener);
    }
  }

  private getGoogleMaps(): Promise<any>  {
    const win = window as any;
    const googleModule = win.google;
    console.log('test 4');
    if(googleModule && googleModule.maps){
      console.log('test 3');
      return Promise.resolve(googleModule.maps);
    }
    console.log('test 7');
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsAPIKey}`;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script); // append child not more than 1 element child
      console.log('test 8');

      script.onload = () => {
        const loadedGoogleModule = win.google;
        if(loadedGoogleModule && loadedGoogleModule.maps) {
          console.log('test 2');
          resolve(loadedGoogleModule.maps);
        } else {
          console.log('test 1');
          reject('Google maps SDK not available.');
        }
      };
    });
  }

}
