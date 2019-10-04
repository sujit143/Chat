import { AuthService } from './providers/auth.service';
import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ContentChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { Events, MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { AppConstants } from './utility/AppContants';
import { AppGlobals } from './utility/AppGlobals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  loggedIn = false;  
  showSlidingMenu = AppGlobals.IsSlidingMenuVisible;
    
  
  constructor(
    private events: Events,
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    
    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        showCloseButton: true,
        position: 'bottom',
        closeButtonText: `Reload`
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   
  }

  onSplitPaneVisibleChanged(event){    
    this.showSlidingMenu = AppGlobals.IsSlidingMenuVisible = event.detail.visible;
    this.navigateToDefaulPage();
    this.publishSlideMenuVisibleChangedEvent(event.detail.visible);
  }

  publishSlideMenuVisibleChangedEvent(isVisible)
  {
    this.events.publish(AppConstants.SlidingMenuChangeEvenName, isVisible);
  }

  navigateToDefaulPage(){
    this.authService.isLoggedIn().then((data) => {
        if(data === true)
        {
          if(this.showSlidingMenu == false){
            this.router.navigate(['/app/chat','chatusers']);
          }
          else{
            this.router.navigate(['chatdetails']);
          }
        }
        
    });
    
  }
  
}
