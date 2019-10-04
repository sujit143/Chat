import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../../providers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-header',
  templateUrl: './userheader.page.html',
  styleUrls: ['./userheader.page.scss'],
})
export class UserheaderPage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private menu: MenuController) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout().then((data) => {
      this.router.navigate(['login']).then(()=> this.menu.enable(false));
    });
  }

}
