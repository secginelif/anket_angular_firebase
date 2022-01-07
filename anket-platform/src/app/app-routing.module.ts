import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard' ;
import { RegisterComponent } from './components/register/register.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { HomeComponent } from './components/home/home.component';
import { IcerikdetayComponent } from './components/icerikdetay/icerikdetay.component';
import { IcerikduzenleComponent } from './components/icerikduzenle/icerikduzenle.component';
import { LoginComponent } from './components/login/login.component';
import { KayitekleComponent } from './components/kayitekle/kayitekle.component';
import { IceriksilComponent } from './components/iceriksil/iceriksil.component';

const redirectLogin=()=> redirectUnauthorizedTo(['/login']);
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectLogin}
  },
  {
    path:'kayitekle',
    component:KayitekleComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectLogin}
  },
  {
    path:'icerikdetay/:key',
    component:IcerikdetayComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectLogin}
  },
  {
    path:'icerikduzenle/:key',
    component:IcerikduzenleComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectLogin}
  },
  {
    path:'iceriksil/:key',
    component:IceriksilComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe:redirectLogin}
  },

    {path:'kayitlar', component:KayitlarComponent},

  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
