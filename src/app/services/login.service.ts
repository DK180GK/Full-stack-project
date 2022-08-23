export class LoginService{
    
        
        constructor() { }

        isLoggedIn:boolean=false;
        login(){
          this.isLoggedIn=true
        }
        logout(){
          this.isLoggedIn=false
        }
        isAuthenticated(){
            console.log(this.isLoggedIn)
          return this.isLoggedIn
        }
}