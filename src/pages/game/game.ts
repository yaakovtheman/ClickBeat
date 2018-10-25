import { Component } from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {NativeAudio} from "@ionic-native/native-audio";

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(public navCtrl: NavController,private nativeAudio: NativeAudio,private platform : Platform) {
    this.nativeAudio.preloadComplex('heartbeatComplex', 'assets/mp3/heartbeat.mp3', 1, 10, 0).then(()=>{});
  }
  timerId: number;
  simpleId: number;
  complexId: number;
  beats: number;
  count: number = 0;
  imgClass: string;
  gameRes: number;
  resText: string;
  resNum: number;
  isDis: boolean = true;

  getRandomNumber(): number{
    return Math.floor(Math.random() * 180) + 40;
  }
  startTest(): void{
    clearInterval(this.timerId);
    this.resText = "";
    this.resNum = null;
    this.isDis = false;
    this.beats = this.getRandomNumber();
    this.timerId = setInterval(() => {
      this.animate();
      this.nativeAudio.play('heartbeatComplex').then(()=>{this.count++});
    }, (60/this.beats)*1000);
    this.nativeAudio.play('heartbeatComplex').then(()=>{});
  }
  stopPlay(){
    clearInterval(this.complexId);
    clearInterval(this.timerId);
  }
  animate() {
    this.imgClass = "img-ani";

    // this will execute async after 100ms
    setTimeout(() => {
      this.imgClass = "animated bounce";
    }, 100);
  }
  checkResult(){
    this.stopPlay();
    let num = Math.abs(this.beats - this.gameRes);
    if (num <= 8){
      this.resText = " כל הכבוד! ";
    }else {
      this.resText = " נסה שוב! " ;
    }
    this.isDis = true;
    this.resNum = this.beats
  }

}
