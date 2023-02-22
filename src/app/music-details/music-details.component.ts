import { track } from './../model/track';
import { MusicserviceService } from './../service/musicservice.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/Customer';
import { Song } from '../model/song';

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.css']
})
export class MusicDetailsComponent implements OnInit {
  //@output event emitter


  constructor(private music:MusicserviceService) {}

  musics: User[] = [];
  music2: User = {};
  songUrl = '../assets/song/rolex-bgm.wav';
  audioObj: HTMLAudioElement | null = null;
  progress = '0%';
  playlist: any[] = [];

  ngOnInit(): void {

    this.music.getEmployeesList().subscribe({
      next: data => {
        this.musics = data;
        console.log(this.musics);
      },
      error: err => {
        alert("Something went wrong!! data not fetched");
      }
    })
  }

  playSong() {
    if (!this.audioObj) {
      this.audioObj = new Audio(this.songUrl);
      this.audioObj.play();
      this.audioObj.addEventListener('timeupdate', () => {
        const duration = this.audioObj?.duration || 0;
        const currentTime = this.audioObj?.currentTime || 0;
        const progress = currentTime / duration * 100;
        this.progress = `${progress}%`;
      });
    } else if (this.audioObj.paused) {
      this.audioObj.play();
    } else {
      this.audioObj.pause();
    }
  }





}
