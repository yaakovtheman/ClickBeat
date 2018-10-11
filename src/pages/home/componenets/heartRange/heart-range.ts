import {Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'heart-range',
  templateUrl: 'heart-range.html'
})
export class HeartRange {
  @Input('beats')
  set beats(value: number) {
    this._beats = value;
    this.updateTypes();
  }

  _beats: number;
  imgDir : string ="assets/imgs/";
  adoultimg : string = this.imgDir + "adoult.png";
  childimg : string = this.imgDir + "child.png";
  babyimg : string = this.imgDir + "baby.png";
  hiimg : string = this.imgDir + "hi.png";
  lowimg : string = this.imgDir + "low.png";
  goodimg : string = this.imgDir + "good.png";
  aStatus: string ="";
  cStatus: string ="";
  bStatus: string ="";

  constructor(public navCtrl: NavController) {

  }
  updateTypes(){
    console.log("update, beats: "+ this._beats)
    if(!this._beats || this._beats <= 0){
        return;
    }
    if(this._beats <= 190 && this._beats >= 100){
      this.bStatus = this.goodimg;
    }else if(this._beats > 190){
      this.bStatus = this.hiimg;
    }else {
      this.bStatus = this.lowimg;
    }
    if(this._beats <= 140 && this._beats >= 60){
      this.cStatus = this.goodimg;
    }else if(this._beats > 140){
      this.cStatus = this.hiimg;
    }else {
      this.cStatus = this.lowimg;
    }
    if(this._beats <= 100 && this._beats >= 60){
      this.aStatus = this.goodimg;
    }else if(this._beats > 100){
      this.aStatus = this.hiimg;
    }else {
      this.aStatus = this.lowimg;
    }
  }
}
