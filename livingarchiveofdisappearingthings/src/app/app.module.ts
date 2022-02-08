import { ResourcesComponent } from './resources/resources.component';
import { ArchiveComponent } from './archive/archive.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { siteHeaderComponent } from './siteHeader/siteHeader.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OpeningComponent } from './opening/opening.component';
@NgModule({
  declarations: [
    AppComponent,
    ArchiveComponent,
    siteHeaderComponent,
    NavComponent,
    ResourcesComponent,
    AboutComponent,
    OpeningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: ArchiveComponent},
      {path: 'resources', component: ResourcesComponent},
      {path: 'about', component: AboutComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  opened = false;
  open() {
    this.opened = true;
  }
}
