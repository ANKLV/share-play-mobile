import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackAPI } from '../api';

@Component({
  selector: 'app-track-search',
  templateUrl: './track-search.component.html',
  styleUrls: ['./track-search.component.scss']
})
export class TrackSearchComponent {
  @Output() onSearch = new EventEmitter<any>();
  trackSearch = new FormGroup({
    name: new FormControl(null, Validators.required)
  })
}
