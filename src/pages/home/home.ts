import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  isStart: boolean = false;
  startTime: number;
  beats: number;
  beatsForMinute: string;
  time: string;
  sconds: number;
  timerId: number;
  heartSrc: string = "assets/imgs/heart.png";
  heartcSrc: string = "assets/imgs/heartC.png";
  isActive: boolean = false;

  public beat() {
    if (this.isStart) {
      this.beats++;
      this.setRate();
    } else {
      let d = new Date();
      this.startTime = Math.round(d.getTime() / 1000);
      this.beats = 1;
      this.isStart = true;
      this.startTimer();
    }
    this.isActive = true;
  }

  setRate() {
    let d = new Date();
    let currentSec = Math.round(d.getTime() / 1000);
    let elaps = currentSec - this.startTime;
    let myBeat = (60 / elaps) * this.beats;
    this.beatsForMinute = "" + Math.round(myBeat);
  }

  public resetBeat() {
    this.isStart = false;
    this.beatsForMinute = "";
    if (this.timerId) {
      clearInterval(this.timerId);
      this.sconds = 0;
      this.time = "";
    }
  }

  startTimer() {
    this.sconds = 0;
    this.time = "" + this.sconds;
    this.timerId = setInterval(() => {
      this.time = "" + this.sconds;
      this.sconds++;
      // this.myDate = new Date();
    }, 1000);
  }
  clickUp(){
    this.isActive = false;
  }
  //setTimeout(myFunction, 3000)


}
