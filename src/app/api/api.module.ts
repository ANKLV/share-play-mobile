import { NgModule } from '@angular/core';

import { PlaylistAPI } from './playlist';

import { TrackAPI } from './track';

import { PlaylistTrackAPI } from './playlistTrack';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [PlaylistAPI, TrackAPI, PlaylistTrackAPI]
})
export class ApiModule { }
