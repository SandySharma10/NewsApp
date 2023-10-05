import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToasterModule } from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { AboutComponent } from './about/about.component';
import { CommonserviceService } from './commonservice.service';
import { ForgotpageComponent } from './forgotpage/forgotpage.component';
import { ContactComponent } from './contact/contact.component';
import { UserRegisterService } from './user-register.service';
import { AdminComponent } from './admin/admin.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { MatIconModule } from '@angular/material/icon';
import { FavoriteComponent } from './favorite/favorite.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    SinglepageComponent,
    AboutComponent,
    ForgotpageComponent,
    ContactComponent,
    AdminComponent,
    AdminDataComponent,
    FavoriteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserModule,
    MatIconModule,
    ToasterModule.forRoot()
  ],
  providers: [CommonserviceService,HomeComponent,UserRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
