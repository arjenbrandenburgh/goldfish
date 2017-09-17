import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Configuration } from './app.constants';

import { DragulaModule } from 'ng2-dragula';
import { Draggable } from './draggable/draggable.directive';

import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ZonePlaceholderComponent } from './zoneplaceholder/zoneplaceholder.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    Draggable,
    NavbarComponent,
    ZonePlaceholderComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    SidebarModule
  ],
  providers: [
  	Configuration
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
