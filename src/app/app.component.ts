import { PageInterface } from './app.component';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,  MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { TabsPage } from './../pages/tabs/tabs';

import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SupportPage } from '../pages/support/support';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  appPages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'home' },
    // { title: 'Tutorial', name: 'TabsPage', component: TabsPage, tabComponent: TutorialPage, index: 1, icon: 'info' },

  ];
  loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
  ];

  tutorial: PageInterface = {
    title: 'Tutorial', name: 'TutorialPage', component: TutorialPage, icon: 'hammer'
  };



  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menu:  MenuController,
    public storage: Storage
  ) {
    // Check if the user has already seen the tutorial
     this.storage.get('hasSeenTutorial')
     .then((hasSeenTutorial) => {
       if (hasSeenTutorial) {
         this.rootPage = TabsPage;
       } else {
         this.rootPage = TutorialPage;
       }
        this.initializeApp();
     });

    this.enableMenu(true);

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  openPage(page: PageInterface) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out

    }
  }
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
