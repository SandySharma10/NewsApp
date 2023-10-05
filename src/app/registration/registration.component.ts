import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User=new User("","","","");
  message:any;
  display_array:Array<User> =[];
  loginform: FormGroup;
  username: FormControl;
  email: FormControl;
  pass: FormControl;
  conf_pass: FormControl;
  hide: boolean = true;

  constructor(private service:UserRegisterService) { }

  ngOnInit() {
    this.username =  new FormControl('', [Validators.required,
      Validators.minLength(5)]),
    this.email =  new FormControl('', Validators.required),
    
    this.pass =  new FormControl('', Validators.required),
    this.conf_pass = new FormControl('', Validators.required),
    this.loginform = new FormGroup({
      username: this.username,
      email: this.email,
      pass: this.pass,
      conf_pass: this.conf_pass,
      
    });
  }
  public registerNow(){
    console.log(this.loginform.value);
    this.service.doRegistration(this.loginform.value).subscribe(
      data=>{
        alert('Regester Successfull');
        this.loginform.reset();
        console.log(data);
      },error=>{
        console.error();
      }
      
    );
  }
  
  myFunction() {
    this.hide = !this.hide;
  }


}
