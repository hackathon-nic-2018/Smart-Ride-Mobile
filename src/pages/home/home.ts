import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { InfopadrePage } from '../infopadre/infopadre';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  /*login(){
    this.navCtrl.setRoot( InfopadrePage );
  } */
}
