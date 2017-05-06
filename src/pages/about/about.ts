import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { IhlasPage } from '../ihlas/ihlas';
import { AyetelPage } from '../ayetel/ayetel';
import { YasinPage } from '../yasin/yasin';
import { SalatPage } from '../salat/salat';
import { TevhidPage } from '../tevhid/tevhid';
import { VallahuPage } from '../vallahu/vallahu';
import { Yasin2Page } from '../yasin2/yasin2';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {}

  nextPageVallahu(){
  this.navCtrl.push(VallahuPage);
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
  nextPageYasin2(){
  this.navCtrl.push(Yasin2Page);
  }

  nextPageSalat(){
  this.navCtrl.push(SalatPage);
  }
  nextPageTevhid(){
  this.navCtrl.push(TevhidPage);
  }

}
