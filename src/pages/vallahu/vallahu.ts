import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculatorService } from '../home/calculatorservice';

/*
  Generated class for the Vallahu page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-vallahu',
  templateUrl: 'vallahu.html'
})
export class VallahuPage {

  result = '';
  bol = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public calculator: CalculatorService) {}

  calc(){
     this.result = this.calculator.calculate(1461, this.bol);
  }

  ionViewDidLoad() {
  }

}
