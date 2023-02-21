import { Component } from '@angular/core';

import { HostListener } from '@angular/core';
import { trainingObject } from './training.model';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {

  arrayOFTrainingObjects : trainingObject[] = [
    {
      place: "Sololearn",
    course: "Python Core",
    Information: "Course that went over the general information regarding Python"
    },
    {
      place: "Sololearn",
    course: "Responsive Web Design",
    Information: "A course that teaches HTML, CSS, and Javascript and how to make a responsive frontend"
    },
    {
      place: "Sololearn",
    course: "Java",
    Information: "A course that teaches an overview of the programming language, Java."
    },
    {
      place: "Sololearn",
    course: "C#",
    Information: "A course that goes into how to write, run, and create C# code, as well as it's attributes."
    },
    {
      place: "Udemy",
    course: "Learn Ethical Hacking from Scratch",
    Information: "Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts."
    },
    {
      place: "Udemy",
    course: "Learn Network Hacking From Scratch (Wifi & Wired)",
    Information: "Learn how to hack both WiFi and wired networks like black hat hackers, and learn how to secure them from these attacks."
    },
    {
      place: "Udemy",
    course: "Python for Data Science and Machine Learning Bootcamp",
    Information: "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!"
    },
    {
      place: "Udemy",
    course: "Machine Learning A-Z™: Python & R in Data Science [2023]",
    Information: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included."
    },
  ]








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
