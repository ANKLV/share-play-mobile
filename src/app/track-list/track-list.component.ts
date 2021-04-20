import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent {
  @Output() onAdd = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();
  @Input() tracks:any = [];
  @Input() showAddButton = false;
  @Input() editButton = true;
  @Input() showDeleteButton = true;
  wavesurfer:any;
  currentTrack:any;

  get currentTrackIndex() {
    return this.tracks.map((track:any) => track.id).indexOf(this.currentTrack.id);
  }

  ngOnInit(): void {}
}
