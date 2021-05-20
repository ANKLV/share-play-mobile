import { Component, OnInit } from '@angular/core';
import { TrackAPI } from '../api';
import { Router } from '@angular/router';
import { Auth } from "../providers"

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  tracks:any = [];

  constructor(private trackAPI: TrackAPI, public auth: Auth, private router: Router) { }

    ngOnInit(): void {
      this.loadTracks();
    }

    loadTracks() {
      this.trackAPI.query().subscribe((data) => {
        this.tracks = data;
      }, (error) => {
        console.log('error', error);
      })
    }

    onCreateTrack(track:any) {
      this.tracks.push(track);
    }

    deleteTrack(id: number) {
      if (confirm("Are you sure?"))
        this.trackAPI.delete(id).subscribe(() => {
        this.tracks = this.tracks.filter((data:any) => data.id !== id);
        }, (error) => {
        console.log('error', error)
      })
    }

    logOut() {
      this.auth.signOut();
      this.router.navigate(['/tabs/tab1']);
    }
  }
