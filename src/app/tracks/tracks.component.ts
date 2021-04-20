import { Component, OnInit } from '@angular/core';
import { TrackAPI } from '../api';

@Component({
  selector: 'app-track',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {
  tracks:any = [];
  wavesurfer:any;

  constructor(private trackAPI: TrackAPI) { }

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

    updateTrack(track:any) {
      this.trackAPI.update(track.id, {track}).subscribe(() => {
        track.edit = false;
      })
    }
  }
