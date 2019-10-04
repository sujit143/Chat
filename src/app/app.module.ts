
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChatcontactsPage } from './pages/shared/chatcontacts/chatcontacts.page';

//providers
import { LocationStrategy, HashLocationStrategy,DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonHttpService } from './shared/common-http.service';
import { LocalStorageService } from './shared/local-storage.service';
import { JWTTokenInterceptorService } from './shared/jwttoken-interceptor.service';
import { MasterService } from './services/master.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { CookieService } from './services/cookie.service';
import { CommonUtilityService } from './services/common-utility.service';
import { ModuleService } from './services/module.services';
import { CommonAppService } from './services/appservices/common-app.service';
import { DbGroupService } from '../app/services/appservices/dbChatService';
import { HttpModule } from '@angular/http';

import { File } from '@ionic-native/file/ngx';
import { RouteReuseStrategy } from '@angular/router';
import { IonicRouteStrategy } from '@ionic/angular';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    HttpModule
  ],
  declarations: [AppComponent, ChatcontactsPage, NotificationsComponent],
  entryComponents: [NotificationsComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar,
    DatePipe,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTTokenInterceptorService,
      multi: true,
    },
    CommonHttpService,LocalStorageService,MasterService,MessageService,CookieService
    ,CommonAppService,CommonUtilityService, ModuleService, DbGroupService,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
