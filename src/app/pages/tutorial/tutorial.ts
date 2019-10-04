import { AuthService } from './../../providers/auth.service';
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage implements OnInit {
  showSkip = true;

  @ViewChild('slides') slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    public authService: AuthService
  ) {
    
  }

  ngOnInit(){
    this.menu.enable(false);
    this.initializeView();
  }

  initializeView(){
    this.authService.hasSeenTutorials().then((data) => {
      if(data === true){
        this.startApp();
      }

    });
  }

  startApp() { 
    this.authService.setHasSeenTutorials(true);
    this.authService.setIsloggeinStatus(false);
    this.authService.isLoggedIn().then((data) => {
      if(data === true) {
        this.router
        .navigate(['chatdetails']).then(() => this.menu.enable(true));
      }
      else{
        this.router.navigate(['login']).then(() => this.menu.enable(false));
      }
    });
    
    
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    // this.menu.enable(true);
  }
}
