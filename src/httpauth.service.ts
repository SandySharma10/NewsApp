import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { TranslateService } from './../components/translate/translate.service';

@Injectable({providedIn: 'root'})
export class HttpClientAuth {
  public data: any;
  public error: any;
  public responce: any;
  public translatedText: string;
  public supportedLangs: any[];

  constructor(private http: HttpClient,
    //  private _translate: TranslateService
     ) {}

  // for language
ngOnInit() {
  //  this.supportedLangs = [{ display: 'English', value: 'en' }, { display: '华语', value: 'zh' }];

   // this.selectLang('en');
  }

  createAuthorizationHeader() {
    const head:any= {};
    head['Content-Type'] = 'application/json';
    if (localStorage.getItem('token')) {
      head['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;
    }
    return new HttpHeaders(head);
  }
 get(url:any) {
    return this.http.get(url, {
      headers: this.createAuthorizationHeader()
    });
  }

  delete(url:any) {
    return this.http.delete(url, {
      headers: this.createAuthorizationHeader()
    });
  }
post(url:any,data:any) {
    return this.http.post(url, JSON.stringify(data), {
      headers: this.createAuthorizationHeader()
    });
  }

  put(url:any,data:any) {
    return this.http.put(url, JSON.stringify(data), {
      headers: this.createAuthorizationHeader()
    });
  }
  patch(url:any,data:any) {
    return this.http.patch(url, JSON.stringify(data), {
      headers: this.createAuthorizationHeader()
    });
  }
}