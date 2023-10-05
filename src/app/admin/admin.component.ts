import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { environment } from 'src/environments/environment';
import { CommonserviceService } from '../commonservice.service';
import { UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router:Router,private tosterService:ToasterService) { }

  ngOnInit(): void {

  }
  loginForm=new FormGroup({

    username : new FormControl('',[Validators.required]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  get username(){
    return this.loginForm.get('username');
  }
  get password(){
    return this.loginForm.get('password');
  }
  login(){
    if(this.username.value==='admin'){

      localStorage.setItem('token',JSON.stringify(this.password.value));
      this.tosterService.pop('success', 'Success!', `Loggin successfully`);
      this.router.navigate(['admin-data']);

    }else{
      this.tosterService.pop('error', 'Error!', `Username password incorrect`);
    }
  }

  }
  
  

  


