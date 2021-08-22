import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { PlaceLocation } from './location.model';

/*
[
    new Place
    (
      'p1',
      'Manhatten Mansion',
      'In the hart of New York City',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
      149.99,
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'xyz'
    ),
    new Place
    (
      'p2',
      'Cool House',
      'In the middle of Amsterdam',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
      999.99,
      new Date('2021-01-01'),
      new Date('2021-12-31'),
      'abc'
    ),
    new Place
    (
      'p3',
      'The Foggy Palace',
      'Not your avarage city trip!',
      'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
      55.55,
      new Date('2019-01-01'),
      new Date('2019-12-31'),
      'abc'
    )
  ]
*/






interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  imageUrl: string;
  price: number;
  title: string;
  userId: string;
  location: PlaceLocation;
}


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private thePlaces = new BehaviorSubject<Place[]>([]);

  get places() {
    return this.thePlaces.asObservable();
  }

  constructor(
    private authservice: AuthService,
    private http: HttpClient
  ) { }
  fetchPlaces() {
    return this.http
    .get<{[key: string]: PlaceData}>(
      'https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/offered-places.json'
    )
    .pipe(map(resData => {
      const places = [];
      for(const key in resData) {
        if(resData.hasOwnProperty(key)){
          places.push(
            new Place(
              key,
              resData[key].title,
              resData[key].description,
              resData[key].imageUrl,
              resData[key].price,
              new Date(resData[key].availableFrom),
              new Date(resData[key].availableTo),
              resData[key].userId,
              resData[key].location
            )
          );
        }
      }
      return places;
      //return [];
    }),
    tap(places => {
      this.thePlaces.next(places);
    })
    );
  }

  getPlace(id: string) {
    return this.http.get<PlaceData>(`https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/offered-places/${id}.json`)
    .pipe(
      map(placeData =>
        new Place(
          id,
          placeData.title,
          placeData.description,
          placeData.imageUrl,
          placeData.price,
          new Date (placeData.availableFrom),
          new Date (placeData.availableTo),
          placeData.userId,
          placeData.location
        )
      )
    );
  }
/*
    this.places.pipe(
      take(1),
      map(places => Object.assign({},places.find(p => p.id === id)))
    );
    //map( (places: any) => [...places.find(p => p.id === id)])
  }
*/

  uploadImage(image: File) {
    const uploadData = new FormData();
    uploadData.append('image', image);
    console.log(10);
    return this.http.post<{imageUrl: string; imagePath: string}>(
      'https://us-central1-retoe-1.cloudfunctions.net/storeImage', uploadData
      );

  }

  addPlace(
    title: string,
    description: string,
    price: number,
    dateFrom: Date,
    dateTo: Date,
    location: PlaceLocation,
    imageUrl: string
  ){
    let generatedId: string;
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      imageUrl,
      price,
      dateFrom,
      dateTo,
      this.authservice.userId,
      location
    );
    return this.http
    .post<{name: string}>('https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/offered-places.json', {
      ...newPlace,
      id: null
    })

    .pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.places;
      }),
      take(1),
      tap( places => {
        newPlace.id = generatedId;
        this.thePlaces.next(places.concat(newPlace));
      })
    );
    // return this.places
    // .pipe(take(1),
    //   delay(1000),

    // );
    // console.log(this.thePlaces);
  }

  updatePlace(
    placeId: string,
    title: string,
    description: string)
    {
      let updatedPlaces: Place [];
      return this.places.pipe(
        take(1),
        switchMap(places => {
          if(!places || places.length <= 0){
            return this.fetchPlaces();
          } else {
            return of(places);
          }
        }),
        switchMap(places => {
          const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
          updatedPlaces = [...places];
          const oldPlace = updatedPlaces[updatedPlaceIndex];
          updatedPlaces[updatedPlaceIndex] = new Place(
            oldPlace.id,
            title,
            description,
            oldPlace.imageUrl,
            oldPlace.price,
            oldPlace.availableFrom,
            oldPlace.availableTo,
            oldPlace.userId,
            oldPlace.location
          );
          return this.http.put(`https://retoe-1-default-rtdb.europe-west1.firebasedatabase.app/offered-places/${placeId}.json`,
            {...updatedPlaces[updatedPlaceIndex], id: null}
          );
        }),
        tap( () => {
          this.thePlaces.next(updatedPlaces);
        })
      );
    }
}
/*

      )
      return this.places.pipe(
        take(1),
        delay(1000),
        tap (places => {
        const updatedPlaceIndex = places.findIndex(pl => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableTo,
          oldPlace.userId
        );

      }));
  }
}
*/
