import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculatorService } from '../home/calculatorservice';

/*
  Generated class for the Salat page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-salat',
  templateUrl: 'salat.html'
})
export class SalatPage {
  
  result = '';
  bol = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public calculator: CalculatorService) {}

  calc(){
     this.result = this.calculator.calculate(1000, this.bol);
  }

  ionViewDidLoad() {
  }

}
