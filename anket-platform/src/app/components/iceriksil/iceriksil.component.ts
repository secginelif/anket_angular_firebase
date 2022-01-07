import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbServisService } from 'src/app/services/fbServis.service';
import { Icerik } from 'src/app/models/icerik';


@Component({
  selector: 'app-iceriksil',
  templateUrl: './iceriksil.component.html',
  styleUrls: ['./iceriksil.component.css']
})
export class IceriksilComponent implements OnInit {
  key:string;
  secicerik:Icerik=new Icerik();
  constructor(
    public route:ActivatedRoute,
    public fbServis:FbServisService,
    public router:Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(p=> {
      this.key=p.key;
      this.IcerikGetir();
      this.Sil();
    });
  }

  IcerikGetir(){
    this.fbServis.IcerikByKey(this.key).snapshotChanges().subscribe(data=>{
        const y = {...data.payload.toJSON(),key:this.key};
        this.secicerik=(y as Icerik);
        
      });
    
      
  }

  Sil(){
      this.fbServis.IcerikSil(this.key).then(d=>
        this.router.navigate(['/']));
  }
}
