import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SidebarComponent } from './sidebar.component';
import { LifecounterComponent } from './lifecounter/lifecounter.component';
import { ManapoolComponent } from './manapool/manapool.component';

@NgModule({
  declarations: [
    LifecounterComponent,
    ManapoolComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
