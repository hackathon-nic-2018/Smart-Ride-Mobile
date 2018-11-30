import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MecanicoPage } from './mecanico';

@NgModule({
  declarations: [
    MecanicoPage,
  ],
  imports: [
    IonicPageModule.forChild(MecanicoPage),
  ],
})
export class MecanicoPageModule {}
