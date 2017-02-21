import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';


export const firebaseConfig = {
  apiKey: "AIzaSyBVR8A-Mawq6aJiudG-i1Aes_dVf3JTovw",
  authDomain: "recip-311bc.firebaseapp.com",
  databaseURL: "https://recip-311bc.firebaseio.com",
  storageBucket: "recip-311bc.appspot.com",
  messagingSenderId: "779087682601"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

