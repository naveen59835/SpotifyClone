
import { track } from './../model/track';
import { Component, OnInit } from '@angular/core';
import { MusicserviceService } from '../service/musicservice.service';

@Component({
  selector: 'app-addtoplaylist',
  templateUrl: './addtoplaylist.component.html',
  styleUrls: ['./addtoplaylist.component.css']
})
export class AddtoplaylistComponent implements OnInit {
  tracks: track[] = [];
  audioObj: HTMLAudioElement | null = null;
  progress = '0%';
  Url: string | undefined;
  isPlaying = false;

  constructor(private music: MusicserviceService) {}

  ngOnInit(): void {
    this.tracks = this.music.tracks;
    this.Url = this.music.track.musicPath;
  }

  addto() {
    this.tracks.push(this.music.track);
  }


  play(index: number) {
    if (this.audioObj) {
      this.audioObj.pause();
      this.audioObj = null;
    }

    this.audioObj = new Audio(this.tracks[index].musicPath);
    this.audioObj.play();
    this.isPlaying = true;
    this.Url = this.tracks[index].musicPath;
  }
  pause() {
    if (this.audioObj) {
      this.audioObj.pause();
      this.isPlaying = false;
    }
  }



   skipToPosition(event: MouseEvent) {
    if (this.audioObj) {
      const progressElement = event.currentTarget as HTMLElement;
      const rect = progressElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const percent = x / width;
      const newTime = this.audioObj.duration * percent;
      this.audioObj.currentTime = newTime;
    }
  }
  delete(track: any) {
    const index = this.tracks.indexOf(track);
    if (index !== -1) {
      this.tracks.splice(index, 1);
    }
  }


}





