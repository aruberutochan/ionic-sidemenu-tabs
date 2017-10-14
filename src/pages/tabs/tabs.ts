import { TutorialPage } from './../tutorial/tutorial';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tabPages: Array<{title: string, component: any, icon: string}>;

  tab1Root: any = HomePage;
  tab2Root: any = TutorialPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabPages = [
      { title: 'Home', component: HomePage , icon: 'home'},
      { title: 'Tutorial', component: TutorialPage , icon: 'help'},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
