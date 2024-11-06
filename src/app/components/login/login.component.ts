import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  loginErrorMessage: string = '';
  constructor(private router: Router,private loginService: LoginService) { }
isLoggedIn=this.loginService.isLoggedIn
  ngOnInit(): void {
  }
  userLogin(){
    if(this.email!=='admin' || this.password!=='amrita'){
      this.loginErrorMessage='Please use the correct email and password';
      this.loginService.logout()}
      
      else{
        this.loginService.login()
        
      this.router.navigate(['/Dashboard'])}
    
  }
}
