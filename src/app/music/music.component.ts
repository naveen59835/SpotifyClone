import { Input, OnChanges, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { User } from '../model/Customer';
import { track } from '../model/track';
import { MusicserviceService } from '../service/musicservice.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnChanges {

  // searchText: string = '';
  progress = '0%';
  trackId: string | undefined;
  trackName: string | undefined;
  constructor(private music:MusicserviceService) {}

  @Input('musicone') musics: User = {};
  audioObj: HTMLAudioElement | null = null;
  Url: string | undefined;
  // track: track = {};
  //  tracks: track[] = [];
  searchTerm: string = '';
  filteredTracks: track[] = [];
  showForm: boolean = false;
  playlists: string[] = ['Favorites', 'Party', 'Chill'];
  selectedPlaylist: string = '';
  newPlaylist: string ='';





  ngOnChanges() {
    // this.artistName = this.musics.trackList?.map(track => track.artistName) || [];
    this.Url = this.musics.trackList?.musicPath;
    this.trackId = this.musics.trackList?.trackId;
    this.trackName = this.musics.trackList?.trackName;

  }

  playSong() {
    if (!this.audioObj) {
      this.audioObj = new Audio(this.Url);
      this.audioObj.play();
      this.audioObj.addEventListener('timeupdate', () => {
        const duration = this.audioObj?.duration || 0;
        const currentTime = this.audioObj?.currentTime || 0;
        const progress = currentTime / duration * 100;
        this.progress = `${progress}%`;
      });

      // output track info to console when playing starts
      console.log(`Playing track ${this.trackId}: ${this.trackName}`);
    } else if (this.audioObj.paused) {
      this.audioObj.play();
    } else {
      this.audioObj.pause();
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

addto(){
  const track = {
    artistName: this.musics.trackList?.artistName,
    duration: this.musics.trackList?.duration,
    musicPath: this.musics.trackList?.musicPath,
    trackId: this.musics.trackList?.trackId,
    trackName: this.musics.trackList?.trackName
  };
alert("Successfully added to Playlist");
  this.music.tracks.push(track);
  console.log('Added track:', track);
  console.log('All tracks:', this.music.tracks);
}
addToPlaylist() {
  if (this.newPlaylist) {
    this.playlists.push(this.newPlaylist);
    this.selectedPlaylist = this.newPlaylist;
  }
  // Add song to selected playlist
  console.log(`Adding song to playlist ${this.selectedPlaylist}`);
  // Reset form
  this.showForm = false;
  this.newPlaylist = '';
}




}



