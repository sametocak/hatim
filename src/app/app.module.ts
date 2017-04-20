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
import { DigerPage } from '../pages/diger/diger';





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
    DigerPage
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
    DigerPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
