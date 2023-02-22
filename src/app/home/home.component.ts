import { track } from './../model/track';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  members: {trackId: string, trackName: string,duration:string, artistName: string, url: string}[] = [
    {trackId: '1', trackName: 'Alag', artistName: 'Sriram',duration:'1 mins', url: '../assets/images/image1.jpeg'},
    {trackId: '2', trackName: 'Minsara', artistName: 'minsara',duration:'2 mins', url: '../assets/images/image2.jpeg'},
    {trackId: '3', trackName: 'Naan', artistName: 'Rahmaan',duration:'3 mins', url: '../assets/images/image3.jpeg'},
    {trackId: '4', trackName: 'Rolex', artistName: 'Sid',duration:'1.5 mins', url: '../assets/images/image4.jpeg'},
    {trackId: '5', trackName: 'Pirates', artistName: 'Mark',duration:'3 mins', url: '../assets/images/image5.jpeg'},
    {trackId: '6', trackName: 'Rolex1', artistName: 'Rolex',duration:'3 mins', url: '../assets/images/image6.jpeg'},
    {trackId: '7', trackName: 'Varanam', artistName: 'Surya',duration:'2 mins', url: '../assets/images/image7.jpeg'},
    {trackId: '8', trackName: 'BGM', artistName: 'Vedha',duration:'1.5 mins', url: '../assets/images/image8.jpeg'},
    {trackId: '9', trackName: 'Yanki', artistName: 'Yanko',duration:'1.8 mins', url: '../assets/images/image10.jpeg'},


  ];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;



}
