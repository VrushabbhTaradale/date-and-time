// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DateTimeIconComponent } from './date-time-icon/date-time-icon.component'; // Adjust the path as necessary

@NgModule({
  declarations: [
    AppComponent,
    DateTimeIconComponent  // Declare the component here
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],

  exports: [DateTimeIconComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
