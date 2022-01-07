import { Component, OnInit } from '@angular/core';
import { FbServisService } from 'src/app/services/fbServis.service';
import { Router } from '@angular/router';
import { Icerik } from 'src/app/models/icerik';

@Component({
  selector: 'app-kayitekle',
  templateUrl: './kayitekle.component.html',
  styleUrls: ['./kayitekle.component.css']
})
export class KayitekleComponent implements OnInit {
  secKayit:Icerik=new Icerik();

  constructor(
    public fbServis:FbServisService,
    public router: Router
  ) { }

  ngOnInit(): void {
    
  }

  Kaydet(){
    var user = JSON.parse(localStorage.getItem("user"));
    this.secKayit.uid=user.uid;
    var tarih= new Date();
    this.secKayit.kayTarih = tarih.getTime().toString();
    this.secKayit.duzTarih = tarih.getTime().toString();
    this.fbServis.IcerikEkle(this.secKayit).then((d:any)=>{
      this.router.navigate(['/']);
    });
  }
}
