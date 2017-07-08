import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalculatorService } from '../home/calculatorservice';

 
@Component({
  selector: 'page-yasin2',
  templateUrl: 'yasin2.html'
})
export class Yasin2Page {

  result = '';
  bol = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public calculator: CalculatorService) {}


  calc(){
    this.result = this.calculator.calculate(41, this.bol);
  }

  ionViewDidLoad() {
  }

}
