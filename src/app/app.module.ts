import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { InfopadrePage } from '../pages/infopadre/infopadre';

import { ScanPage } from '../pages/scan/scan';

import { MecanicoPage } from '../pages/mecanico/mecanico';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';

export const firebaseConfig = {
  piKey: "AIzaSyBbxPOCEg5YoJKfgd4XIMf0ao-QOWPvjwk",
          authDomain: "laravelfirebase-15a71.firebaseapp.com",
          databaseURL: "https://laravelfirebase-15a71.firebaseio.com",
          projectId: "laravelfirebase-15a71",
          storageBucket: "laravelfirebase-15a71.appspot.com",
          messagingSenderId: "357836809287"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfopadrePage,
    ScanPage,
    MecanicoPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfopadrePage,
    ScanPage,
    MecanicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
