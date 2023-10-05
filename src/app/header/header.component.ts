import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  public selectsearch:any="";
  constructor(private _msgServce:CommonserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  searchdata(values:any){
    //debugger
    this._msgServce.onDataReceived(values)
   
  }
  loggedIn(){
    return localStorage.getItem('token')?true:false;
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
