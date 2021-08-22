import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';

import { PlacesService } from '../../places.service';
import { Router } from '@angular/router';
import { PlaceLocation } from '../../location.model';
import { switchMap } from 'rxjs/operators';

const base64toBlob = (b64Data, contentType='', sliceSize=512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
};

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  constructor(
    private placesService: PlacesService,
    private router: Router,
    private loadingCtrl: LoadingController
    ) { }
    /*
    base64toBlob(base64Data, contentType) {
      contentType = contentType || '';
      const sliceSize = 1024;
      const byteCharacters = atob(base64Data);
      const bytesLength = byteCharacters.length;
      const slicesCount = Math.ceil(bytesLength / sliceSize);
      const byteArrays = new Array(slicesCount);

      for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
          const begin = sliceIndex * sliceSize;
          const end = Math.min(begin + sliceSize, bytesLength);

          const bytes = new Array(end - begin);
          for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
              bytes[i] = byteCharacters[offset].charCodeAt(0);
          }
          byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return new Blob(byteArrays, { type: contentType });
    }
*/
  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      location: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null)
    });
  }

  onLocationPicked(location: PlaceLocation){
    this.form.patchValue({ location });
  }

  onImagePicked(imageData: string | File) {
    let imageFile;
    if (typeof imageData === 'string') {
      try {
        imageFile = base64toBlob(imageData, 'image/jpeg');
      } catch(error) {
        console.log(error);
        return;
      }
    } else {
      imageFile = imageData;
    }
    this.form.patchValue({ image: imageFile });
  }
  /*
  onImagePicked(imageData: string | File){
    if(typeof imageData === 'string') {
      const imageFile = dataurltoBlob()
    }
  }
  */

  onCreateOffer() {
    if(!this.form.valid || !this.form.get('image').value) {
      return;
    }
    console.log(this.form.value);
    this.loadingCtrl.create({
      message: 'Create place...'
    }).then(loadingEl => {
      loadingEl.present();
      this.placesService.uploadImage(this.form.get('image').value).pipe(
        switchMap(uploadRes =>
         this.placesService.addPlace(
          this.form.value.title,
          this.form.value.description,
          +this.form.value.price, //string convert door +
           new Date (this.form.value.dateFrom),
           new Date (this.form.value.dateTo),
           this.form.value.location,
           uploadRes.imageUrl
          )
      ))
      .subscribe(() => {
          loadingEl.dismiss();
          this.form.reset();
          this.router.navigateByUrl('/places/tabs/offers');
          console.log('test1');
      });

    });
    console.log(this.form);
  }
}
