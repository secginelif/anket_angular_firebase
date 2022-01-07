import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { Kayit } from '../models/kayit';
import { Uye } from '../models/uye';
import { Icerik } from '../models/icerik';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FbServisService {
  private dbKayit='/Kayitlar';
  private dbUye='/Uyeler';
  private dbIcerik='/Icerikler';


  kayitRef: AngularFireList<Kayit>=null;
  uyeRef:AngularFireList<Uye>=null;
  icerikRef:AngularFireList<Icerik>=null;

constructor(
  public db:AngularFireDatabase,
  public pb:AngularFireDatabase,
  public afAuth: AngularFireAuth,
) {
  this.kayitRef = db.list(this.dbKayit);
  this.uyeRef = db.list(this.dbUye);
  this.icerikRef = db.list(this.dbIcerik);
 }


 OturumAc(mail:string, parola:string){
  return this.afAuth.signInWithEmailAndPassword(mail,parola);
}
OturumKapat(){
  return this.afAuth.signOut();
}

OturumKontrol(){
  if(localStorage.getItem("user")){
    return true;
  }else {
    return false;
  }
}

UyeOl(uye:Uye){
  return this.afAuth.createUserWithEmailAndPassword(uye.mail,uye.parola);
}
UyeEkle(uye:Uye){
  return this.uyeRef.push(uye);
}

// ---kayitlar baslangıc---

KayitListele(){
  return this.kayitRef;
}
KayitEkle(kayit: Kayit): any {
  return this.kayitRef.push(kayit);
}
KayitDuzenle(kayit: Kayit): any {
  return this.kayitRef.update(kayit.key,kayit);
}
KayitSil(key: string) {
  return this.kayitRef.remove(key);
}
// ---bitis---


// _____________
// ---icerik---

IcerikEkle(icerik: Icerik): any {
  return this.icerikRef.push(icerik);
}
IcerikListele(){
  return this.icerikRef;
}

IcerikSil(key: string): Promise<void> {
  return this.icerikRef.remove(key);
}

IcerikListeleByUID(uid:string){
  return this.db.list('/Icerikler', q => q.orderByChild("uid").equalTo(uid));
}
IcerikDuzenle(icerik: Icerik): any {
  return this.icerikRef.update(icerik.key,icerik);
}
IcerikByKey(key:string){
  return this.db.object('/Icerikler/'+ key);
}
}
