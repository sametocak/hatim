import { Component } from '@angular/core';
import { CalculatorService } from '../home/calculatorservice';


@Component({
  selector: 'page-ihlas',
  templateUrl: 'ihlas.html'
})

export class IhlasPage {
  bol = '';
  result = '';

  constructor (public calculator: CalculatorService){

  }

  calc(){
    this.result = this.calculator.calculate(100, this.bol);
  }


}
