import {Component, Input} from '@angular/core';
import { NavController } from 'ionic-angular';
import {MedicPrams} from "../../../../classes/MedicPrams";

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
  @Input()
  medicParams :MedicPrams;

  _beats: number;
  imgDir : string ="assets/imgs/";
  adoultimg : string = this.imgDir + "adoult.png";
  childimg : string = this.imgDir + "child.png";
  babyimg : string = this.imgDir + "baby.png";
  hiimg : string = this.imgDir + "hi.png";
  lowimg : string = this.imgDir + "low.png";
  goodimg : string = this.imgDir + "good.png";
  defimg : string = this.imgDir + "def.png";
  aStatus: string =this.defimg;
  cStatus: string =this.defimg;
  bStatus: string =this.defimg;

  constructor(public navCtrl: NavController) {

  }
  doDefImg(){
    this.aStatus =this.defimg;
    this.cStatus =this.defimg;
    this.bStatus =this.defimg;
  }
  updateTypes(){
    console.log("update, beats: "+ this._beats)
    if(!this._beats || this._beats <= 0){
      this.doDefImg();
        return;
    }
    if(this._beats <= this.medicParams.bHiValue && this._beats >= this.medicParams.bLowValue){
      this.bStatus = this.goodimg;
    }else if(this._beats > this.medicParams.bHiValue){
      this.bStatus = this.hiimg;
    }else {
      this.bStatus = this.lowimg;
    }
    if(this._beats <= this.medicParams.cHiValue && this._beats >= this.medicParams.cLowValue){
      this.cStatus = this.goodimg;
    }else if(this._beats > this.medicParams.cHiValue){
      this.cStatus = this.hiimg;
    }else {
      this.cStatus = this.lowimg;
    }
    if(this._beats <= this.medicParams.aHiValue && this._beats >= this.medicParams.aLowValue){
      this.aStatus = this.goodimg;
    }else if(this._beats > this.medicParams.aHiValue){
      this.aStatus = this.hiimg;
    }else {
      this.aStatus = this.lowimg;
    }
  }
}
