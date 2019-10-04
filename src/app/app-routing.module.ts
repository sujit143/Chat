import { UserheaderPage } from './pages/shared/userheader/userheader.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './providers/auth-guard.guard';
import { ChatdetailsPage } from './pages/chatdetails/chatdetails.page';
import { ChatdetailsPageModule } from './pages/chatdetails/chatdetails.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tutorial',
    pathMatch: 'full'
  },
  {
    path: 'chatdetails',
    loadChildren: './pages/chatdetails/chatdetails.module#ChatdetailsPageModule',
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'chatdetails/session/:userId',
    loadChildren: './pages/chatdetails/chatdetails.module#ChatdetailsPageModule',
    canActivate: [AuthGuardGuard]
  }, 
  {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule'
    //canLoad: [CheckTutorial]
  },  
  { path: 'chatcontactlsit', loadChildren: './pages/chatcontactlsit/chatcontactlsit.module#ChatcontactlsitPageModule' },
  { path: 'chatusers', loadChildren: './pages/shared/chatusers/chatusers.module#ChatusersPageModule' },
  { path: 'chatgroups', loadChildren: './pages/shared/chatgroups/chatgroups.module#ChatgroupsPageModule' },
  { path: 'callchats', loadChildren: './pages/shared/callchats/callchats.module#CallchatsPageModule' },
  { path: 'userheader', loadChildren: './pages/shared/userheader/userheader.module#UserheaderPageModule' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
