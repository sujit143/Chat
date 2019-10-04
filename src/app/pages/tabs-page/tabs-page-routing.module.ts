import { ChatusersPage } from './../shared/chatusers/chatusers.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'chat',
    component: TabsPage,
    children: [
      {
        path: 'chatusers',
        children: [
          {
            path: '',
            component: ChatusersPage,
          }
        ]
      },
      {
        path: 'teams',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

