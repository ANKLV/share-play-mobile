import { Component, OnInit } from '@angular/core';
import { PlaylistAPI } from '../api';
import { ModalController } from '@ionic/angular';
import { CreatePlaylistModal } from '../create-playlist-modal/create-playlist-modal.component'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists:any = [];

  constructor(private playlistAPI: PlaylistAPI, public modalController: ModalController) { }

  ngOnInit(): void {
    this.loadPlaylists();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreatePlaylistModal,
      cssClass: 'my-custom-class'
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.playlists.push(data);
    }
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
