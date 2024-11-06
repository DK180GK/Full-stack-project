import { Component, OnInit } from '@angular/core';
import { StudentInterface } from 'src/app/Interface/studentInterface';

import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {
  constructor(private studentService:StudentsService) { }
  student:StudentInterface={
    studentId:'',
    firstName:'',
    lastName:'',
    amountPaid:'',
    //balance:''
  }

  

  ngOnInit(): void {
  }
  //balance:number=this.studentServive.feeAmount-Number(this.student.amountPaid);
addStudent(){
  console.log(this.student)
  //this.student.balance=this.studentService.getBalance(this.student.amountPaid)
  this.studentService.addNewStudent(this.student)
}
getBalance(){
  this.studentService.getBalance(this.student.amountPaid)
}
}
