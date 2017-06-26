
/* This assignment intializes two variables in ngOnInit and shown in HTML using string interpolation */
import { IStudentData } from './student-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  
  /* Array of Student object */
  studentDataArray: IStudentData[] = []
  sttudentData: IStudentData;

  ngOnInit() {

    this.title = "Student Data";

    /* Insert first student */
    this.sttudentData = {
      rollNo: 11,
      name: "Sudesh",
      englishMarks: 80,
      mathsMarks: 85,
      scienceMarks: 88
    };

    this.studentDataArray.unshift(this.sttudentData);

    /* Insert second student */
    this.sttudentData = {
      rollNo: 6,
      name: "Mahesh",
      englishMarks: 90,
      mathsMarks: 95,
      scienceMarks: 98
    };


    this.studentDataArray.unshift(this.sttudentData);

    /* Insert third student */
    this.sttudentData = {
      rollNo: 15,
      name: "Rajesh",
      englishMarks: 60,
      mathsMarks: 66,
      scienceMarks: 58
    };


    this.studentDataArray.unshift(this.sttudentData);

  }
}

