import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from './../../../providers/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-contacts',
  templateUrl: './chatcontacts.page.html',
  styleUrls: ['./chatcontacts.page.scss'],
})
export class ChatcontactsPage implements OnInit {
  chatContacts: any [];
  constructor(private authService: AuthService, private router: Router, private menu: MenuController) { }

  ngOnInit() {
    this.getChatContacts('chat');
  }

  ionViewDidEnter() {
    
  }

  updateSchedule(event){
    this.getChatContacts(event.detail.value);
  }

  logout(){
    this.authService.logout().then((data) => {
      this.router.navigate(['login']).then(()=> this.menu.enable(false));
    });
  }
  
  getChatContacts(contactType: string)
  {
    if(contactType === 'chat')
    {
        this.chatContacts = [{
          id: 1,
          name: 'Othon',
          photofile: 'https://i.pravatar.cc/100',
          lastmessage: 'How are you',
          lastmessagedate: '10:22 AM',
          unreadcount: 2
        },
        {
          id: 2,
          name: 'Jimmy',
          photofile: 'https://i.pravatar.cc/200',
          lastmessage: 'Printing apps',
          lastmessagedate: 'Tue',
          unreadcount: 20
        },
        {
          id: 3,
          name: 'Eric',
          photofile: 'https://i.pravatar.cc/230',
          lastmessage: 'New website designs',
          lastmessagedate: 'Mon',
          unreadcount: 0
        },
        {
          id: 4,
          name: 'Sudarshan',
          photofile: 'https://i.pravatar.cc/330',
          lastmessage: 'New requrements',
          lastmessagedate: '07/22',
          unreadcount: 2
        }];
    }
    else if(contactType === 'groups') {
      this.chatContacts = [{
        name: 'Yourdrs',
        photofile: 'https://i.pravatar.cc/400',
        lastmessage: 'New req surgical DB',
        lastmessagedate: '2019-07-22 12:22:00',
        unreadcount: 0
      },
      {
        name: 'HEZ',
        photofile: 'https://i.pravatar.cc/450',
        lastmessage: 'Web and app design',
        lastmessagedate: '2019-07-22 02:22:00',
        unreadcount: 2
      },
      {
        name: 'Mobile Apps',
        photofile: 'https://i.pravatar.cc/500',
        lastmessage: 'IceLink integration',
        lastmessagedate: '2019-07-22 01:22:00',
        unreadcount: 2
      },
      {
        name: 'ZoomTeams',
        photofile: 'https://i.pravatar.cc/550',
        lastmessage: 'Knowledge base implementation',
        lastmessagedate: '2019-07-22 09:22:00',
        unreadcount: 2
      }];
    }
    else if(contactType === 'calls') {
      this.chatContacts = [{
        name: 'Yourdrs',
        photofile: 'https://i.pravatar.cc/400',
        lastmessage: 'New req surgical DB',
        lastmessagedate: '2019-07-22 12:22:00',
        unreadcount: 0
      },
      {
        name: 'HEZ',
        photofile: 'https://i.pravatar.cc/450',
        lastmessage: 'Web and app design',
        lastmessagedate: '2019-07-22 02:22:00',
        unreadcount: 2
      },
      {
        name: 'Mobile Apps',
        photofile: 'https://i.pravatar.cc/500',
        lastmessage: 'IceLink integration',
        lastmessagedate: '2019-07-22 01:22:00',
        unreadcount: 2
      },
      {
        name: 'ZoomTeams',
        photofile: 'https://i.pravatar.cc/550',
        lastmessage: 'Knowledge base implementation',
        lastmessagedate: '2019-07-22 09:22:00',
        unreadcount: 2
      }];
    }
  }
}
