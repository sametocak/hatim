import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IhlasPage } from '../pages/ihlas/ihlas';
import { AyetelPage } from '../pages/ayetel/ayetel';
import { YasinPage } from '../pages/yasin/yasin';
import { SalatPage } from '../pages/salat/salat';
import { TevhidPage } from '../pages/tevhid/tevhid';
import { VallahuPage } from '../pages/vallahu/vallahu';
import { Yasin2Page } from '../pages/yasin2/yasin2';
import { CalculatorService } from '../pages/home/calculatorservice';





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IhlasPage,
    AyetelPage,
    YasinPage,
    SalatPage,
    TevhidPage,
    VallahuPage,
    Yasin2Page
  ],
  imports: [

    IonicModule.forRoot(MyApp)

  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IhlasPage,
    AyetelPage,
    YasinPage,
    SalatPage,
    TevhidPage,
    VallahuPage,
    Yasin2Page
  ],
  providers: [CalculatorService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
