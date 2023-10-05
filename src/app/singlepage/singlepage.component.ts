import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from './../../environments/environment';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CommonserviceService } from '../commonservice.service';
import { HttpClientAuth } from 'src/httpauth.service';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements OnInit {
  p: number = 1;
 public selectartical:any=null;
 public selectarticals:any[]=[];
  constructor(private _msgServce:CommonserviceService, private authService:HttpClientAuth) {
    this.selectartical=JSON.parse(localStorage.getItem("item"));
    }
    public  newsId=JSON.parse(localStorage.getItem("item")).newsId;
    public url=`http://localhost:8081/api/getnews/${this.newsId}`;
  
    ngOnInit(): void {

    /*console.log(this.selectartical);
    this._msgServce.product()
    .subscribe((productdata:any)=>
    {
      
      this.selectarticals = productdata.articles;
      console.log(productdata);
    },error=>{
      console.log(error);
    });*/
    this.getNews();
    
    }

    
      getNews(){
        //let username=JSON.parse(localStorage.getItem("user"));
        let  newsId=JSON.parse(localStorage.getItem("item")).newsId;
         
        this.authService.get(`http://localhost:8081/api/getnews/${newsId}`).subscribe((data:any)=>{
        console.log(data);
        //this.articals=data;
        localStorage.setItem("articals",JSON.stringify(data));
        },error=>{
          console.log(error);
        });
        
      

    }
    

  }



