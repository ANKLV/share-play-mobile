import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PlaylistTrackAPI } from '../api';
import { PlaylistAPI } from '../api';
import { TrackAPI } from '../api';

@Component({
  selector: 'app-playlist-tracks',
  templateUrl: './playlist-tracks.component.html',
  styleUrls: ['./playlist-tracks.component.scss']
})
export class PlaylistTracksComponent implements OnInit {
  playlistsTracks:any = [];
  playlists:any = [];
  tracks:any = [];
  plTracks:any = [];
  playlistId:any;

  constructor(private playlistTrackAPI: PlaylistTrackAPI, private trackAPI: TrackAPI, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.playlistId = this.route.snapshot.paramMap.get('id');
    this.loadPlaylistTracks(this.playlistId);
    this.loadTracks();
  }

  loadPlaylistTracks(playlistId:any) {
    this.playlistTrackAPI.query({playlist_id: playlistId}).subscribe((data) => {
      this.playlistsTracks = data;
      this.plTracks = this.playlistsTracks.map((track:any) => track.track)
      console.log('error', data);
    }, (error) => {
    })
  }

  onCreatePlaylistTrack(playlistTrack:any) {
    this.playlistsTracks.push(playlistTrack);
  }

  deletePlaylistTrack(trackId: number) {
    const playlistTrack = this.playlistsTracks.find((playlistsTrack:any) => playlistsTrack.track_id == trackId)

    if (confirm("Are you sure?"))
      this.playlistTrackAPI.delete(playlistTrack.id).subscribe(() => {
      this.playlistsTracks = this.playlistsTracks.filter((data:any) => data.id !== playlistTrack.id);
      this.plTracks = this.playlistsTracks.map((track:any) => track.track);
      }, (error) => {
      console.log('error', error)
    })
  }

  updatePlaylistTrack(playlistTrack:any) {
    this.playlistTrackAPI.update(playlistTrack.id, {playlistTrack}).subscribe(() => {
      playlistTrack.edit = false;
    })
  }

  loadTracks(query?:any) {
    const params = query ? {query: query} : {};

    this.trackAPI.query(params).subscribe((data) => {
      this.tracks = data;
    }, (error) => {
      console.log('error', error);
    })
  }

  addTrack(track:any) {
    this.playlistTrackAPI.create({playlist_track: {track_id: track.id, playlist_id: this.playlistId }}).subscribe((data:any) => {
    this.playlistsTracks.push(data);
    this.plTracks.push(data.track);
    })
  }
}
