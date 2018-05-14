import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, HeaderComponent, SideNavComponent, TabsComponent } from './components';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, SideNavComponent, TabsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
