import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chatusers',
  templateUrl: './chatusers.page.html',
  styleUrls: ['./chatusers.page.scss'],
})
export class ChatusersPage implements OnInit {
  chatContacts: any [];
  constructor() { }

  ngOnInit() {
    this.getChatContacts();
  }

  getChatContacts()
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
      lastmessagedate: 'Sat',
      unreadcount: 20
    },
    {
      id: 3,
      name: 'Eric',
      photofile: 'https://i.pravatar.cc/230',
      lastmessage: 'New website designs',
      lastmessagedate: 'Thu',
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
}
