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
import { CreatePlaylistModal } from './create-playlist-modal/create-playlist-modal.component';
import { TrackListComponent } from './track-list/track-list.component';
import { TracksComponent } from './tracks/tracks.component';
import { EditTrackModal } from './edit-track-modal/edit-track-modal.component';
import { PlaylistTracksComponent } from './playlist-tracks/playlist-tracks.component';
import { AddPlaylistTracksModal } from './add-playlist-tracks-modal/add-playlist-tracks-modal.component';
import { TabsPage } from './tabs/tabs.page';
import { Tab1Page } from './tab1/tab1.page';
import { Tab2Page } from './tab2/tab2.page';
import { Tab3Page } from './tab3/tab3.page';
import { Toast } from "./providers"

import { StreamingMedia } from '@ionic-native/streaming-media/ngx';


@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    CreatePlaylistModal,
    TracksComponent,
    TrackListComponent,
    EditTrackModal,
    PlaylistTracksComponent,
    AddPlaylistTracksModal,
    TabsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page
  ],
  entryComponents: [
    CreatePlaylistModal, EditTrackModal, AddPlaylistTracksModal
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
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Toast, StreamingMedia
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
