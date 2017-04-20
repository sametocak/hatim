import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { IhlasPage } from '../ihlas/ihlas';
import { AyetelPage } from '../ayetel/ayetel';
import { YasinPage } from '../yasin/yasin';
import { SalatPage } from '../salat/salat';
import { TevhidPage } from '../tevhid/tevhid';
import { DigerPage } from '../diger/diger';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}

  nextPageDiger(){
  this.navCtrl.push(DigerPage);
  }

  nextPageIhlas(){
  this.navCtrl.push(IhlasPage);
  }
  nextPageAyet(){
  this.navCtrl.push(AyetelPage);
  }
  nextPageYasin(){
  this.navCtrl.push(YasinPage);
  }
  nextPageSalat(){
  this.navCtrl.push(SalatPage);
  }
  nextPageTevhid(){
  this.navCtrl.push(TevhidPage);
  }

}
