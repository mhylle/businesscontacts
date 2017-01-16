import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAf-Ib4WRX6tayh0XTUETlxUDhu6W6ro0E',
  authDomain: 'businesscontacts-fb34b.firebaseapp.com',
  databaseURL: 'https://businesscontacts-fb34b.firebaseio.com',
  storageBucket: 'businesscontacts-fb34b.appspot.com',
  messagingSenderId: '741416000228'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
