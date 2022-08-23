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
  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
this.allStudentsArray=this.studentsService.getAllStudents()
  }
  fee:number=this.studentsService.feeAmount
}
