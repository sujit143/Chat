import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatusersPage } from './chatusers.page';
import { UserheaderPage } from '../userheader/userheader.page';

const routes: Routes = [
  {
    path: '',
    component: ChatusersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatusersPage, UserheaderPage]
})
export class ChatusersPageModule {}
