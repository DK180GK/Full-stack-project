import { Component, OnInit } from '@angular/core';
import { StudentInterface } from 'src/app/Interface/studentInterface';
import { StudentsService } from 'src/app/services/students.service';
@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
allStudentsArray!:StudentInterface[];
balance: number=0;
y:string=''
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
this.allStudentsArray=this.studentsService.getAllStudents();
//this.balance=this.studentsService.getBalance();
  }
  getBalance(y:string){
    return this.studentsService.getBalance(y)
  }
  fee:number=this.studentsService.feeAmount
}
