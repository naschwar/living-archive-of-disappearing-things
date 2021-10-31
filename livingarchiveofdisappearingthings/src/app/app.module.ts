import { ArchiveComponent } from './archive/archive.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { siteHeaderComponent } from './siteHeader/siteHeader.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ArchiveComponent,
    siteHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
