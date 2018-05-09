import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginModule } from './login-modul/login-modul.module';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ConversesComponent } from './chat/converses/converses.component';
import { ConversaComponent } from './chat/conversa/conversa.component';

import { AppRouting } from './app.routing';

import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ConversesComponent,
    ConversaComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    LoginModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
