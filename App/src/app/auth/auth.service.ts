import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { switchMap, map} from 'rxjs/operators';

import { environment } from '../../environments/environment';

export interface User {
  uid: string;
  email: string;
//  picture: string;
// name: string
//  createdAt: firebase.firestore.FieldValue;
}

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.afAuth.onAuthStateChanged(user => {
      console.log('Changed: ', user);
      this.currentUser = user;
    });
  }

  async signup({email, password}) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password,
    );
    console.log('result: ', credential);
    const uid = credential.user.uid;

    return this.afs.doc(
      `users/${uid}`
    ).set({
      uid,
      email: credential.user.email,
    });
  }

  signIn({ email, password }){
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.afAuth.signOut();
  }
  getUsers(){
    return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }


  /*
  get userId(){
    return this.user.uid;
  }

  private theUserIsAuthenticated = false; //inloggen niet nodig
  private theUserId = 'null'; //gebruiker

  get userIsAuthenticated(){
    return this.theUserIsAuthenticated;
  }

  get userId(){
    return this.theUserId;
  }
  constructor(private http: HttpClient) { }
  login() {
    this.theUserIsAuthenticated = true;
  }

  logout(){
    this.theUserIsAuthenticated =false;
  }

  signup(email: string, password: string){
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${environment.googleMapsAPIKey}`,
    {email, password, returnSecureToken: true }
    );
  }

*/

}
