import { AppGlobals } from './../../utility/AppGlobals';
import { MenuController } from '@ionic/angular';
import { AuthService } from './../../providers/auth.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserCreds } from '../../providers/models/interfaces/usercreds';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {
  login: UserCreds = { username: '', password: '' };
  submitted = false;

  constructor(
    public authService: AuthService,
    public router: Router,
    public menu: MenuController
  ) { 
    this.menu.enable(false);
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
    this.authService.login({ username: this.login.username, password: this.login.password}).subscribe(res => {
      if(res === true){
        if(AppGlobals.IsSlidingMenuVisible){
        this.router.navigate(['chatdetails']).then(() => this.menu.enable(true));
        }
        else{
          this.router.navigate(['app/chat','chatusers']).then(() => this.menu.enable(true));
        }
      }
      else{
        alert('Invalid usernam or passowrd.');
      }
    });
  }
}


  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
