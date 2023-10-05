import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientAuth } from 'src/httpauth.service';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  p: number = 1;
  public country:any="us";
  public categaury:any="business";
  public from:any="2020-03-21";
  public to:any="2021-03-21";
  public articals:any[]=[];
  //public  newsId=JSON.parse(localStorage.getItem("item")).newsId;
  public url=`${environment.baseURL}/top-headlines?country=${this.country}&category=${this.categaury}&from${this.from}&to${this.to}&apiKey=${JSON.parse(localStorage.getItem("token"))}`;
  //public url=`http://localhost:8081/api/getnews/${this.newsId}`;
 
  public searchvalue: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private http: HttpClient,private authHttp:HttpClientAuth) { }
  onDataReceived = (close: any) => this.searchvalue.next(close);
  product():Observable<any>{
    return this.http.get(this.url);
  }
  
  }


