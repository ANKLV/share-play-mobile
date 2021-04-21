import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { ApiModule } from './api/api.module';
import { TracksComponent } from './tracks/tracks.component';
import { TrackFormComponent } from './track-form/track-form.component';
import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';
import { TrackSearchComponent } from './track-search/track-search.component';
import { TrackListComponent } from './track-list/track-list.component';
import { CreatePlaylistModal } from './create-playlist-modal/create-playlist-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    TracksComponent,
    TrackFormComponent,
    PlaylistTracksComponent,
    TrackSearchComponent,
    TrackListComponent,
    CreatePlaylistModal
  ],
  entryComponents: [
    CreatePlaylistModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
