import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './profile/profile.component';
import { NavbarFooterComponent } from './footer/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ExploreComponent } from './explore/explore.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    NavbarFooterComponent,
    HomeComponent,
    BookmarksComponent,
    ExploreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
