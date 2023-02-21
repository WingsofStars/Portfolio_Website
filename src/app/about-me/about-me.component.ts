import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  isInfoShowing: boolean = true;
  isProgressShowing: boolean = false;

  showInfoDiv(): void {
    this.isInfoShowing = true;
    this.isProgressShowing = false;
  }
  showProgressDiv(): void {
    this.isProgressShowing = true;
    this.isInfoShowing = false;
  }


}
