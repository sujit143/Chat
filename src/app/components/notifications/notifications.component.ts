import { Component, OnInit, Input, Output } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  @Input() imageUrl :string;
   base64Image: any;
  constructor() { }

  ngOnInit() {}

  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 100,
      targetHeight: 100
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.imageUrl = this.base64Image;
      //console.log("base"+this.base64Image);
    }, (err) => {
      console.log(err);
    });
  }

  private openGallery (): void {
    let cameraOptions = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: Camera.EncodingType.JPEG,      
      correctOrientation: true
    }
  
    Camera.getPicture(cameraOptions)
      .then(file_uri => this.base64Image = file_uri, 
      err => console.log(err));   
  }

}
