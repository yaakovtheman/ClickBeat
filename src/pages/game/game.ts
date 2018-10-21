import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {NativeAudio} from "@ionic-native/native-audio";

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(public navCtrl: NavController,private nativeAudio: NativeAudio,private platform : Platform) {
    this.nativeAudio.preloadSimple('heartbeat', 'assets/mp3/heartbeat.mp3').then(()=>{});
  }
  timerId: number;
  beats: number;
  count: number = 0;

  getRandomNumber(): number{
    return Math.floor(Math.random() * 190) + 40  ;
  }
  startTest(): void{
    this.beats = this.getRandomNumber();
    this.timerId = setInterval(() => {
      this.nativeAudio.play('heartbeat').then(()=>{this.count++});
    }, (60/this.beats)*1000);
    this.nativeAudio.play('heartbeat').then(()=>{});

  }

}
