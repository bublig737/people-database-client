import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';


import { 
  AppComponent,
  HeaderComponent, 
  SideNavComponent, 
  TabsComponent, 
  FacebookContentComponent,
  VKContentComponent,
  InstagramContentComponent, 
  LinkedinContentComponent,
  TelegramContentComponent,
  TwitterContentComponent } from './components';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    SideNavComponent, 
    TabsComponent, 
    FacebookContentComponent,
    VKContentComponent, 
    InstagramContentComponent, 
    LinkedinContentComponent, 
    TelegramContentComponent, 
    TwitterContentComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
