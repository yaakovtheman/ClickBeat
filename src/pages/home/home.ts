import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import {MedicPrams} from "../../classes/MedicPrams";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private dialogs: Dialogs) {
    this.medicPrams = new MedicPrams(100,60,190,100,140,60)
  }
  medicPrams : MedicPrams;
  isStart: boolean = false;
  startTime: number;
  beats: number;
  beatsForMinute: string;
  time: string;
  seconds: number;
  timerId: number;
  beatTime: Date;
  isFreeze: boolean;
  currentSec: number;
  heartSrc: string = "assets/imgs/heart.png";
  heartcSrc: string = "assets/imgs/heartC.png";
  isActive: boolean = false;

  public beat() {
    if (this.isStart) {
      this.beats++;
      this.setRate();
    } else {
      if(this.isFreeze){
        this.resetBeat();
        this.isFreeze = false;
      }
      this.beatTime = new Date();
      this.startTime = Math.round(this.beatTime.getTime() / 1000);
      this.beats = 1;
      this.isStart = true;
      this.startTimer();
    }
    this.isActive = true;
  }

  setRate() {
    let d = new Date();
    this.currentSec = Math.round(d.getTime() / 1000);
    let elaps = this.currentSec - this.startTime;
    let myBeat = (60 / elaps) * this.beats;
    this.beatsForMinute = "" + Math.round(myBeat);
  }

  public resetBeat() {
    this.isStart = false;
    this.beatsForMinute = "";
    if (this.timerId) {
      clearInterval(this.timerId);
      this.seconds = 0;
      this.time = "";
    }
  }

  startTimer() {
    this.seconds = 0;
    this.time = "" + this.seconds;
    this.timerId = setInterval(() => {
      this.seconds++;
      this.time = "" + this.seconds;
      if(this.seconds==15){
        this.dialogs.beep(1);
      }
      let d = new Date();
      if(this.currentSec){
        let currentSec = Math.round(d.getTime() / 1000);
        let elaps = currentSec - this.currentSec;
        console.log("currentSec: " + currentSec + " lastBeat: "+this.currentSec + " elaps: "+ elaps);
        if(elaps > 9){
          this.freez();
        }
      }
      // this.myDate = new Date();
    }, 1000);
  }
  clickUp(){
    this.isActive = false;
  }

  freez(){
    this.isStart = false;
    this.isFreeze = true;
    this.currentSec = null;
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }


}
