import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription ,interval} from 'rxjs';
import { HttpClientAuth } from 'src/httpauth.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  public articals:any[]=[];
  p: number = 1;
  public selectartical:any=null;
 public selectarticals:any[]=[];
 private updateSubscription: Subscription;
 
  constructor(private httpClientAuth:HttpClientAuth, private router:Router) { }
  //public  newsId=JSON.parse(localStorage.getItem("item")).newsId;
  ngOnInit(): void {
    this.getfavnews();
    this.updateSubscription = interval(1000).subscribe(
      (val) => { this.getfavnews()
    }
    );
  
  }
  getfavnews(){
    let username=JSON.parse(localStorage.getItem("user"));
    this.httpClientAuth.get(`http://localhost:8081/api/userfavs/${username}`).subscribe((data:any)=>{
    console.log(data);
    this.articals=data;
    localStorage.setItem("articals",JSON.stringify(data));
    },error=>{
      console.log(error);
    });
    
  }
  /*selectNews(item:any){
    localStorage.setItem("item",JSON.stringify(item));
    this.router.navigateByUrl("/singlepage");
   }*/
   deleteNews(item:any){
    //item.news_Id=item.newsId;
    //let newsId=JSON.parse(localStorage.getItem("item")).newsId;
    let username=JSON.parse(localStorage.getItem("user"));
    //debugger;
    this.httpClientAuth.delete(`http://localhost:8081/api/favdelete/${username}/${item.news_Id}`).subscribe((data:any)=>{
      //debugger;
       console.log(data);
       alert('deleted successfull');
       
       //this.getfavnews();
       //debugger
  },error=>{
    console.log(error);
   }); 
   
  }

}
