import { Component, OnInit } from '@angular/core';
import { FbServisService } from 'src/app/services/fbServis.service';
import { Icerik } from 'src/app/models/icerik';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-icerikduzenle',
  templateUrl: './icerikduzenle.component.html',
  styleUrls: ['./icerikduzenle.component.css']
})
export class IcerikduzenleComponent implements OnInit {
  key:string;
  secicerik:Icerik=new Icerik();
  constructor(
    public route:ActivatedRoute,
    public fbServis:FbServisService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      this.key = p.key;
      this.IcerikGetir();
    })
  }

  IcerikGetir(){
    this.fbServis.IcerikByKey(this.key).snapshotChanges().subscribe(data=>{
        const y = {...data.payload.toJSON(),key:this.key};
        this.secicerik=(y as Icerik);
      });
    
  }

  Kaydet(){
    var tarih = new Date();
    this.secicerik.duzTarih= tarih.getTime().toString();
    this.fbServis.IcerikDuzenle(this.secicerik).then((d:any)=>{
      this.router.navigate(['/'])
    });
  }
}
