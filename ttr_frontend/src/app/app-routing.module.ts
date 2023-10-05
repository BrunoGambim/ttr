import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { ExploreComponent } from './explore/explore.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user', component: ProfileComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'explore', component: ExploreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
