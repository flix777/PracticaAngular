import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-modul/login/login.component';
import { ConversaComponent } from './chat/conversa/conversa.component';
import { ConversesComponent } from './chat/converses/converses.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
    { path: 'chat', component: ConversesComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRouting {}
