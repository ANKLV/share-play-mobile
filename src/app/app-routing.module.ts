import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists/playlists.component';
import { TracksComponent } from './tracks/tracks.component';
import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: '' , redirectTo: 'playlists', pathMatch: 'full' },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'tracks', component: TracksComponent },
  { path: 'playlists/:id/tracks', component: PlaylistTracksComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
