import { RouterModule, Routes } from '@angular/router';
import { AlbumphotosComponent } from './components/albumphotos/albumphotos.component';
import { AlbumdetailComponent } from './components/albumdetail/albumdetail.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path : 'home', component: HomeComponent },
    { path : 'about', component: AboutComponent },
    { path : 'albums', component: AlbumsComponent },
    { path : 'album/:id', component: AlbumdetailComponent },
    { path : 'album/:id/photos', component: AlbumphotosComponent },
    { path : '', redirectTo: '/home', pathMatch: 'full' },
    { path : '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  
