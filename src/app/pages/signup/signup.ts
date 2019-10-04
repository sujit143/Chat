import { MenuController } from '@ionic/angular';
import { UserCreds } from './../../providers/models/interfaces/usercreds';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage {
  signup: UserCreds = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router,
    public menu: MenuController
  ) {
    this.menu.enable(false);
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.router.navigateByUrl('/chatdetails');
    }
  }
}
