import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotpageComponent } from './forgotpage/forgotpage.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDataComponent } from './admin-data/admin-data.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AuthGaurdService } from './auth-guard.service';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGaurdService]
  },

  {
    path: 'singlepage',
    component: SinglepageComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'forgotpage',
    component: ForgotpageComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin-data',
    component: AdminDataComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
    canActivate: [AuthGaurdService]
  },
  { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    { path: '**', component: PagenotfoundComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
