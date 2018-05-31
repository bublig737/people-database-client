import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { JsonpModule }   from '@angular/http';




import { 
  AppComponent,
  HeaderComponent, 
  SideNavComponent, 
  TabsComponent, 
  MainPageComponent,
  FacebookContentComponent,
  VKContentComponent,
  InstagramContentComponent, 
  LinkedinContentComponent,
  TelegramContentComponent,
  TwitterContentComponent } from './components';
  
  // определение маршрутов
  const appRoutes: Routes =[
      { path: '', component: MainPageComponent},
      { path: 'data', component: TabsComponent}
  ];
  
  @NgModule({
    declarations: [
    AppComponent, 
    HeaderComponent, 
    SideNavComponent, 
    TabsComponent, 
    MainPageComponent,
    FacebookContentComponent,
    VKContentComponent, 
    InstagramContentComponent, 
    LinkedinContentComponent, 
    TelegramContentComponent, 
    TwitterContentComponent
  ],
  imports: [
    BrowserModule, JsonpModule, FormsModule, RouterModule.forRoot(appRoutes)
    // , HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})

export class AppModule { }
