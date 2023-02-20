import { Component } from '@angular/core';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {
screenHeight: number = window.innerHeight;
screenWidth:number = window.innerWidth;
blockIsValid:boolean = false;
 


  @HostListener('window:resize', ['$event'])
  getScreenResize(event?: undefined) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 1158){
      this.blockIsValid = false;
    }
    else{
      this.blockIsValid = true;
    }

    console.log(this.screenWidth)
  }
constructor() {
  this.getScreenResize();
}  

}
