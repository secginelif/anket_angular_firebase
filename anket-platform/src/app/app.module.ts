import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IcerikdetayComponent } from './components/icerikdetay/icerikdetay.component';
import { KayitekleComponent } from './components/kayitekle/kayitekle.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { IcerikduzenleComponent } from './components/icerikduzenle/icerikduzenle.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { IceriksilComponent } from './components/iceriksil/iceriksil.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IcerikdetayComponent,
    KayitekleComponent,
    KayitlarComponent,
    LoginComponent,
    RegisterComponent,
    IcerikduzenleComponent,
    IceriksilComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
