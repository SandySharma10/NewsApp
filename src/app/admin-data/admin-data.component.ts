import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClientAuth } from 'src/httpauth.service';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-admin-data',
  templateUrl: './admin-data.component.html',
  styleUrls: ['./admin-data.component.css']
})
export class AdminDataComponent implements OnInit {

  p: number = 1;
  public country:any="us";
  public categaury:any="business";
  public from:any="2020-03-21";
  public to:any=new Date();
  public articals:any[]=[];
  public url=`${environment.baseURL}/top-headlines?country=${this.country}&category=${this.categaury}&from${this.from}&to${this.to}&apiKey=${JSON.parse(localStorage.getItem("token"))}`;
  constructor(private http: HttpClient,private router:Router,private commonService:CommonserviceService,private httpClientAuth:HttpClientAuth) { 
   
  }

  ngOnInit(): void {
    this.getnews(this.country,this.categaury,this.from,this.to);
    this.onDataChangeReceived();
  }
  getnews(country:any,categaury:any,from:any,to:any){
    this.http.get(`${environment.baseURL}/top-headlines?country=${country}&category=${categaury}&from${from}&to${to}&apiKey=${JSON.parse(localStorage.getItem("token"))}`).subscribe((data:any)=>{
    console.log(data);
    this.articals=data.articles;
    localStorage.setItem("articals",JSON.stringify(data.articles));
    },error=>{
      console.log(error);
    });
  }
  /*selectNews(item:any){
   localStorage.setItem("item",JSON.stringify(item));
   this.router.navigateByUrl("/singlepage");
  }*/
  selectNews(item:any){
    this.httpClientAuth.post("http://localhost:8081/api/news",item).subscribe((data)=>{
       console.log(data);
       alert('added successfull');
  },error=>{
    console.log(error);
   }); 
   
  }
   

  selectcountry(country:any){
    this.getnews(country,this.categaury,this.from,this.to);
  }
  selectcategaury(categaury:any){
    this.getnews(this.country,categaury,this.from,this.to)
  }
  selectfrom(from:any){
   
    this.getnews(this.country,this.categaury,from,this.to)
    console.log(from);
  }
  selectto(to:any){
   
    this.getnews(this.country,this.categaury,this.from,to)
    console.log(to);
  }
  onDataChangeReceived = () => {
    this.commonService.searchvalue.subscribe((change: any) => {

      if (change) {
        this.articals=JSON.parse(localStorage.getItem("articals")).filter((item:any)=>JSON.stringify(item.author).includes(change))
        console.log(change);
      } else{
        this.articals=JSON.parse(localStorage.getItem("articals"));
      }

    });
  }


}
