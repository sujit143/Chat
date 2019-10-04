import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChatdetailsPage } from './chatdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ChatdetailsPage
  }
];

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatdetailsPage]
})
export class ChatdetailsPageModule {}
