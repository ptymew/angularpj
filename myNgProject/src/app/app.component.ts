import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myNgProject';
  score:number = 49;
  name: string = "มะละมะมะ";

  studentlist = [{
    name : "ma",
    studentId : "5921608271",
    weight : 45,
    height : 160
  }, {
    name : "lili",
    studentId : "59216082727",
    weight : 90,
    height : 165
  }, {
    name : "o",
    studentId : "5921608000",
    weight : 70,
    height : 168
  }];

  constructor(){
    // this.student.bmi = (this.student.weight/
    //  ((this.student.height/100)*(this.student.height/100))).toFixed(2);


     this.studentlist.map((object,index)=>{
       let obj:any = object;
       obj.bmi = (object.weight/((object.height/100)*(object.height/100))).toFixed(2);
       return obj;
     })
    console.log(this.studentlist);
  }
}
