import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import {MedicPrams} from "../../classes/MedicPrams";

@Component({
  selector: 'breath',
  templateUrl: 'breath.html'
})
export class Breath {

  constructor(public navCtrl: NavController, private dialogs: Dialogs) {
    this.medicPrams = new MedicPrams(18,12,40,24,30,18);
  }
  medicPrams: MedicPrams;
  isStart: boolean = false;
  startTime: number;
  beats: number;
  beatsForMinute: string;
  time: string;
  sconds: number;
  timerId: number;
  beatTime: Date;
  lastBeat: number;
  isFreez: boolean;
  currentSec: number;
  heartSrc: string = "assets/imgs/lung.png";
  heartcSrc: string = "assets/imgs/heartC.png";
  isActive: boolean = false;

  public beat() {
    if (this.isStart) {
      this.beats++;
      this.setRate();
    } else {
      if(this.freez()){
        this.resetBeat();
        this.isFreez = false;
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
      this.sconds = 0;
      this.time = "";
    }
  }

  startTimer() {
    this.sconds = 0;
    this.time = "" + this.sconds;
    this.timerId = setInterval(() => {
      this.sconds++;
      this.time = "" + this.sconds;
      if(this.sconds==30){
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
    this.isFreez = true;
    this.lastBeat = null;
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }


}
