import {Injectable, Inject} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class CalculatorService {
    
    
    constructor() { }

    // Samet'in Verdiği Formül
    calculate(sayi, kisi){
        if(kisi <= sayi){
            if( sayi % kisi > 0){
                var a = sayi % kisi;
                var bolum = Math.floor(sayi / kisi);
                var b = bolum + 1;
                var c = kisi - a;
                
                return a + " kişi " + b + " kez, " + c + " kişi " + bolum + " kez okusun";
            }else{
                var cal = sayi / kisi;
                return kisi + " kişi " + cal + " kadar okusun";
            }
        }else{
            return "Hatalı Argüman";
        }
    }

    // Adam'ın Formül (GEREK YOK)
    /*
    bolunecek_sayi = 0;
    kisi_sayisi = 0;
    hatim_no = 0;

    setValues(bol, kis, hat){
        this.bolunecek_sayi = bol;
        this.kisi_sayisi = kis;
        this.hatim_no = hat;
    }

    hesapla(){
        this.hatim_no = this.bolunecek_sayi;
        return this.hatimHesapla();
    }

    arttir(){
        this.hatim_no = this.hatim_no + this.bolunecek_sayi;
    }

    hatimHesapla(){
        var tempHatimSay = this.hatim_no;
        var kalan = 0;
        var bolum = 0;
        while(this.kisi_sayisi > this.hatim_no){
            this.arttir();
        }

        var kalan = this.hatim_no % this.kisi_sayisi;
        var bolum = this.hatim_no / this.kisi_sayisi;
        var hat = this.hatim_no / tempHatimSay;
        if(kalan == 0){
            return hat + " hatim için herkes " + bolum + " adet okuyacak";
        }else if(kalan > (this.kisi_sayisi - kalan)){
            var kis1 = this.kisi_sayisi - kalan;
            var bol1 = bolum + 1;
            return hat + " hatim için " + kis1 + " kişi " + bolum + ", diğerleri " + bol1 + " adet okuyacak.";
        }else{
            var bol1 = bolum + 1;
            return hat + " hatim için " + kalan + " kişi " + bol1 + ", diğerleri " + bolum + " adet okuyacak.";
        }
    }
    */

}