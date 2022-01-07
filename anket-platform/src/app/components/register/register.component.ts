import { Component, OnInit } from '@angular/core';
import { FbServisService } from 'src/app/services/fbServis.service';
import { Sonuc } from 'src/app/models/sonuc';
import { Router } from '@angular/router';
import { Uye } from 'src/app/models/uye';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  sonuc:Sonuc=new Sonuc();
  secUye:Uye=new Uye();
  constructor(
    public fbServis:FbServisService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  KayitYap(){
    this.fbServis.UyeOl(this.secUye).then(d =>{
      d.user.updateProfile({
        displayName: this.secUye.adsoyad
      }).then();
      this.secUye.uid = d.user.uid;
      localStorage.setItem("user",JSON.stringify(d.user));
      this.UyeEkle();
    }, err=>{
      this.sonuc.islem = false;
      this.sonuc.mesaj="Hata Oluştu Tekrar Deneyiniz";
    });
  }

  UyeEkle(){
    this.fbServis.UyeEkle(this.secUye).then(d =>{
      this.router.navigate(['/']);
    });
  }
  
}
