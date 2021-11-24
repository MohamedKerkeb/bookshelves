import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // créer un nouveau utilisateur
  createNewUser(email:string, password: string) {
    return new Promise<void>((resolve, reject) => {
      firebase.default.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          resolve();
        },(error) => {
          reject(error)
        })
    })
  }
  // Connection d'un utilisateur
  signInUser(email:string, password: string) {
    return new Promise<void>((resolve, reject) => {
      firebase.default.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          resolve()
        }, (error) => {
          reject(error)
        })
    })
  }
  signOutUser() {
    firebase.default.auth().signOut()
  }
}
