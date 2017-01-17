import {Component, OnInit} from '@angular/core';
import {FirebaseService} from './services/firebase.service'
import {AngularFire, FirebaseListObservable} from 'angularfire2'
import {Business} from "./Business";
import {Category} from "./Category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  private businesses: Business[];
  private categories: Category[];

  appState: string;
  activeKey: string;

  activateCompany: string;
  activateCategory: string;
  activateYearsInBusiness: string;
  activeDescription: string;
  activePhone: string;
  activeEmail: string;
  activeStreetAddress: string;
  activeCity: string;
  activeState: string;
  activeZipcode:string;

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
    console.log('Changing state to: ' + state + ' - Key: ' + key);
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

  filterCategory(category) {
    this._firebaseService.getBusinesses(category).subscribe(businesses => {
      this.businesses = businesses;
    });
  }

  addBusiness(company: string,
              category: string,
              years_in_business: string,
              description: string,
              phone: string,
              email: string,
              street_address: string,
              city: string,
              state: string,
              zipcode: string) {
    let created_at = new Date().toString();

    let newBusiness = {
      company: company,
      category: category,
      years_in_business: years_in_business,
      description: description,
      phone: phone,
      email: email,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      created_at: created_at
    };

    this._firebaseService.addBusiness(newBusiness);
    this.changeState('default', null);
  }
}
