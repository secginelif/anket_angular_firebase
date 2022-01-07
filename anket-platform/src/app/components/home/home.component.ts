import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbServisService } from 'src/app/services/fbServis.service';
import { Icerik } from 'src/app/models/icerik';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
adsoyad:string;
uid:string;
icerikler:Icerik[];
  constructor(
    public fbServis:FbServisService,
    public router:Router
  ) { }

  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.adsoyad=user.displayName;
    this.IcerikListele();
  }

  OturumKapat(){
    this.fbServis.OturumKapat().then(d=>{
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    })
  }

  IcerikListele(){
    this.fbServis.IcerikListeleByUID(this.uid).snapshotChanges().subscribe(data=>{
      this.icerikler=[],
      data.forEach(satir=>{
        const y = {...satir.payload.toJSON(),key:satir.key};
        this.icerikler.push(y as Icerik);
      });
    });
  }

}
