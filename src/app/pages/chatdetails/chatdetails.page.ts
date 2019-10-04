import { AppGlobals } from './../../utility/AppGlobals';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, ViewChild, AfterViewInit } from '@angular/core';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Camera } from '@ionic-native/camera';
import { ActionSheetController } from '@ionic/angular';
import { NotificationsComponent } from './../../components/notifications/notifications.component';
import { PopoverController } from '@ionic/angular';
import { EventEmitter } from 'events';

@Component({
  selector: 'chatdetails',
  templateUrl: './chatdetails.page.html',
  styleUrls: ['./chatdetails.page.scss'],
})
export class ChatdetailsPage implements OnInit,AfterViewInit {
  isSlidingMenuVisible = AppGlobals.IsSlidingMenuVisible
  userId = 1;
  allmessages = [];
  imgornot = [];
  base64Image: any;
  isImage:boolean = false;
  actionSheet: any;
  @ViewChild(NotificationsComponent) child;
  message: string;
  new_msg_model = {
    sentby: 2,
    photoURL: 'https://i.pravatar.cc/110',
    message: 'lets discuss',
    senderName: 'Othon',
    time: '2019-07-25 02:30',
    isMe: true,
    isImage: false,
  };
  // const options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE
  // }

  constructor(private activeRoute: ActivatedRoute, public actionSheetController: ActionSheetController,
    private popoverCtrl: PopoverController) {
    const sessionId = this.activeRoute.snapshot.paramMap.get('userId');
  }

  ngOnInit() {
    const sessionId = this.activeRoute.snapshot.paramMap.get('userId');
    this.getMessages();
  }
  ngAfterViewInit(){
    // this.base64Image = this.child.base64Image;
    if(this.child != undefined)
    {
      this.base64Image = this.child.base64Image;
    }
    else{
      this.base64Image = "test";
    }
  }

  ionViewWillEnter() {

  }

  getMessages() {
    this.allmessages = [{
      sentby: 1,
      photoURL: 'https://i.pravatar.cc/100',
      message: 'Hi, how are you',
      senderName: 'Manju',
      time: '2019-07-25 02:30',
      isMe: false,
      isImage: false,
    }, {
      sentby: 2,
      photoURL: 'https://i.pravatar.cc/110',
      message: 'I am good, how are you',
      senderName: 'Othon',
      time: '2019-07-25 02:30',
      isMe: true,
      isImage: false,
    }, {
      sentby: 1,
      photoURL: 'https://i.pravatar.cc/100',
      message: 'good, thank you',
      senderName: 'Manju',
      time: '2019-07-25 02:30',
      isMe: false,
      isImage: false,
    }, {
      sentby: 2,
      photoURL: 'https://i.pravatar.cc/110',
      message: 'hows everything',
      senderName: 'Othon',
      time: '2019-07-25 02:30',
      isMe: false,
      isImage: false,
    }, {
      sentby: 1,
      photoURL: 'https://i.pravatar.cc/100',
      message: 'all good',
      senderName: 'Manju',
      time: '2019-07-25 02:30',
      isMe: false,
      isImage: false,
    }, {
      sentby: 2,
      photoURL: 'https://i.pravatar.cc/110',
      message: 'lets discuss',
      senderName: 'Othon',
      time: '2019-07-25 02:30',
      isMe: true,
      isImage: false,
    }, {
      sentby: 1,
      photoURL: 'https://i.pravatar.cc/100',
      message: 'sure!',
      senderName: 'Manju',
      time: '2019-07-25 02:30',
      isMe: false,
      isImage: false,
    }];

    for (var key in this.allmessages) {
      if (this.allmessages[key].message.substring(0, 4) == 'http')
        this.imgornot.push(true);
      else
        this.imgornot.push(false);
    }
  }
  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 100,
      targetHeight: 100
    }).then((imageData) => {
      // imageData is a base64 encoded string
      // this.base64Image=this.notification.base64Image+imageData;
      console.log("base image"+this.base64Image);
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.new_msg_model.message = this.base64Image;
      this.new_msg_model.isImage = true,
      this.allmessages.push(this.new_msg_model);
      // this.isImage = true;
    
    }, (err) => {
      console.log(err);
    });
  }

  presentActionSheet() {
    this.actionSheet = this.actionSheetController.create({
      header: 'Open',
      buttons: [{
        text: 'Camera',
        role: 'destructive',
        icon: 'camera',
        handler: () => {
          console.log('camera clicked');
          this.takePicture();
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    }).then(actionsheet => {
      actionsheet.present();
    });
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

  sentTextmsg(message){
    this.new_msg_model.message = message;
    this.new_msg_model.isImage = false;
    this.allmessages.push(this.new_msg_model);
  }
}
