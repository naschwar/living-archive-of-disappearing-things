import { ResourcesComponent } from './resources/resources.component';
import { ArchiveComponent } from './archive/archive.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { siteHeaderComponent } from './siteHeader/siteHeader.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    ArchiveComponent,
    siteHeaderComponent,
    NavComponent,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: ArchiveComponent},
      {path: 'resources', component: ResourcesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
