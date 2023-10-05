import { Component } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NewsApp';
  constructor() {} 
   public config: ToasterConfig = new ToasterConfig({
    limit: 1,
    animation: 'fade'
  });
  
}
