import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';

import { MecanicoPage } from '../mecanico/mecanico';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  options: BarcodeScannerOptions;
  encodText:string='';
  encodeData:any={};
  scannedData:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner:BarcodeScanner) {
  }

  scan(){

    this.options={
      prompt: 'Scan you barcode'
    };

    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Error :', err);
    })
  }


  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodeData = data;
    }, (err) => {
      console.log('Error :', err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scaner(){
    this.navCtrl.setRoot( HomePage );
  }

  Inspeccion(){
    this.navCtrl.setRoot( MecanicoPage );
  }

}
