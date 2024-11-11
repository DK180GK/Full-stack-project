import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string = '';
  private password: string='' ;

  private status:string="Complited";
  setUsername(name: string) {
    this.username = name;
  }

  getUsername(): string {
    return this.username;
  }
setPassword(pass:string){
  this.password = pass;

}
getPass(): string {
  return this.password;
}
getStatus(): string{
  return this.status
}
private paymentStatus = new BehaviorSubject<string>('Pay');

// Observable to watch changes
paymentStatus$ = this.paymentStatus.asObservable();

// Method to update the status
updatePaymentStatus(status: string) {
  this.paymentStatus.next(status);
}
}