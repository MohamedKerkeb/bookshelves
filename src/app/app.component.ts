import { Component } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyD2WBxyv4RzwAzkj3kK-RZeUIfexRs8CGc",
      authDomain: "bookshelves-15812.firebaseapp.com",
      databaseURL: "https://bookshelves-15812-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "bookshelves-15812",
      storageBucket: "bookshelves-15812.appspot.com",
      messagingSenderId: "620888133214",
      appId: "1:620888133214:web:68a2a32f2b35e70a572ecf",
      measurementId: "G-FVFTZYRH4P"
    };
    firebase.default.initializeApp(firebaseConfig)
  }
}
