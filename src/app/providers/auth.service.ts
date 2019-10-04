import { AppConstants } from './../utility/AppContants';
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginResponse } from './models/LoginResponse';
import { FormatString } from '../utility/stringformatter';
import { UrlConstants } from '../utility/UrlConstants';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient, private localStorage: Storage) { }

  login({ username, password }: { username: string; password: string; }): Observable<boolean> {
    return this.http.get<LoginResponse>(FormatString(UrlConstants.loginUrl, username, password))
     .pipe(map(loginRes => {
      if (loginRes && loginRes.Header && loginRes.Header.StatusCode === '200' && loginRes.Token !== null && loginRes.Token !== '') {
        this.localStorage.set(AppConstants.HAS_LOGGED_IN, true);
        return true;
      }
      else{ 
        this.localStorage.set(AppConstants.HAS_LOGGED_IN, false);
        return false;
      }
    }));   
  }

  logout(){
    return this.localStorage.set(AppConstants.HAS_LOGGED_IN, false).then(() => {return true;});
  }

  setIsloggeinStatus(value){
    this.localStorage.set(AppConstants.HAS_LOGGED_IN, value);
  }

  signup(username: string, password: string, displayname: string){}

  isLoggedIn(){
    return this.localStorage.get(AppConstants.HAS_LOGGED_IN).then((data) =>
     { 
       return data; 
    });
    // var hasLoggedIn = this.localStorage.get.HAS_LOGGED_IN);
    /*if(hasLoggedIn === true){
      return true;
    }
    return false;
    */
  }

  hasSeenTutorials(){
    return this.localStorage.get(AppConstants.HAS_SEEN_TUTORIALS).then((data) => {
        return data;
    });
    
  }

  setHasSeenTutorials(value){
    this.localStorage.set(AppConstants.HAS_SEEN_TUTORIALS, true);
  }

}
