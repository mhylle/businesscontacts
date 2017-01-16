import { Component, OnInit } from '@angular/core';
import { FirebaseService} from './services/firebase.service'
import { AngularFire, FirebaseListObservable } from 'angularfire2'
import {Business} from "./Business";
import {Category} from "./Category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit{
  private businesses: Business[];
  private categories: Category[];

  appState: string;
  activeKey: string;

  constructor(private _firebaseService: FirebaseService) {

  }
  ngOnInit() {
    this._firebaseService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    });
    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  changeState(state, key) {
    if (key) {

    }
  }
}
