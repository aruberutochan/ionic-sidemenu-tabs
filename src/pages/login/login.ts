import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {

  submitted = false;

  constructor(public navCtrl: NavController) { }

  onLogin(form: NgForm) {
    this.submitted = true;


  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
