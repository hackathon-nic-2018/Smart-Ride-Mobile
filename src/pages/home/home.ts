import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PerfilpadrePage } from '../perfilpadre/perfilpadre';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  login(): void{
    this.navCtrl.push( PerfilpadrePage );
  }

}
