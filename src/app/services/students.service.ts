import { Injectable } from '@angular/core';
import { StudentInterface } from '../Interface/studentInterface';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() {
   }
  private studentsArray:StudentInterface[]=[];
  feeAmount:number =150000;
  addNewStudent(newStudent:StudentInterface){
    this.studentsArray.push(newStudent)

  }
  getAllStudents(){
    return this.studentsArray
  }
  
}