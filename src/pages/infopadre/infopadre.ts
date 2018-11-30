import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { ScanPage } from '../scan/scan';

import { MecanicoPage } from '../mecanico/mecanico';

/**
 * Generated class for the InfopadrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infopadre',
  templateUrl: 'infopadre.html',
})
export class InfopadrePage { 

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Ruta',
      subTitle: '',
      buttons: ['OK']
    });
    alert.present();
  }
  Alert() {
    const alert = this.alertCtrl.create({
      title: 'Axell Ramos',
      subTitle: '481-080195-0000x',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PortadaPage');
  }

  scaner(){
    this.navCtrl.setRoot( ScanPage );
  }

  Inspeccion(){
    this.navCtrl.setRoot( MecanicoPage );
  }


}
