import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TutorialPage } from './../pages/tutorial/tutorial';
import { TabsPage } from './../pages/tabs/tabs';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SupportPage } from '../pages/support/support';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    TabsPage,
    AccountPage,
    LoginPage,
    SignupPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TutorialPage,
    TabsPage,
    AccountPage,
    LoginPage,
    SignupPage,
    SupportPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
