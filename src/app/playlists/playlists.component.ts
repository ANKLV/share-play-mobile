import { Component, OnInit } from '@angular/core';
import { PlaylistAPI } from '../api';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists:any = [];

  constructor(private playlistAPI: PlaylistAPI) { }

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.playlistAPI.query().subscribe((data) => {
      this.playlists = data;
    }, (error) => {
      console.log('error', error);
    })
  }

  onCreatePlaylist(playlist:any) {
    this.playlists.push(playlist);
  }

  deletePlaylist(id: number) {
    if (confirm("Are you sure?"))
      this.playlistAPI.delete(id).subscribe(() => {
      this.playlists = this.playlists.filter((data:any) => data.id !== id);
      }, (error) => {
      console.log('error', error)
    })
  }

  updatePlaylist(playlist:any) {
    this.playlistAPI.update(playlist.id, {playlist}).subscribe(() => {
      playlist.edit = false;
    })
  }
}
