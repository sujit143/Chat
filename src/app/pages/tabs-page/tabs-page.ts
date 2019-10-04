import { Router } from '@angular/router';
import { AppConstants } from './../../utility/AppContants';
import { Events, MenuController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AppGlobals } from '../../utility/AppGlobals';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit {
  hideTabs = AppGlobals.IsSlidingMenuVisible;
  constructor(private events: Events, private menu: MenuController, private router: Router){}

  ngOnInit(){
    // this.events.subscribe(AppConstants.SlidingMenuChangeEvenName, (data) => {
    //   this.hideTabs = data;
    //   this.navigateToDefaulPage();
    // });

    // this.navigateToDefaulPage();
  }

  navigateToDefaulPage(){
    if(this.hideTabs == false){
      this.router.navigate(['/app/chat','chatusers']);
    }
    else{
      this.router.navigate(['chatdetails']);
    }
  }
}
