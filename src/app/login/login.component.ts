import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { User } from '../user';
import { UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  display_array:Array<User> =[];
  username: FormControl;
  pass: FormControl;
  constructor(private router:Router,private tosterService:ToasterService,private service:UserRegisterService) { }
   ngOnInit(): void {

  }
  loginform=new FormGroup({
    username : new FormControl('',[Validators.required]),
    pass : new FormControl('',[Validators.required])
  });
  /*get username(){
    return this.loginform.get('username');
  }
  get password(){
    return this.loginform.get('password');
  }*/
  public login(){
    /*if(this.username.value==='admin'){

      localStorage.setItem('token',JSON.stringify(this.password.value));
      this.tosterService.pop('success', 'Success!', `Loggin successfully`);
      this.router.navigate(['home']);

    }else{
      this.tosterService.pop('error', 'Error!', `Username password incorrect`);
    }*/
    console.log(this.loginform.value);
    this.service.doLogin(this.loginform.value).subscribe(
      (data:any)=>{
      localStorage.setItem('token',JSON.stringify(data["token"]));
      localStorage.setItem('user',JSON.stringify(this.loginform.value.username));
      this.tosterService.pop('success', 'Success!', `Loggin successfully`);
      this.router.navigate(['home']);

        console.log("add");
        console.log(data);
      },error=>{
        this.invaliduser();
        this.tosterService.pop('error', 'Error!', `Username password incorrect`);
        //console.error("invalid usersss");
      }
    );
  }
  public invaliduser(){
    this.service.doInvalid(this.loginform.value).subscribe(
      (data:any)=>{
     // this.display_array=JSON.parse(localStorage.getItem("token"));
     
     this.tosterService.pop('error', 'Error!', `Username password incorrect`);
     
      this.router.navigate(['login']);

        console.log("add");
        console.log(data);
      },error=>{
        //console.error("invalid usersss");
      }
      
    );
  }

}
