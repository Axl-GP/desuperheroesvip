import { APIService } from './../../Services/api.service';
import { FooterComponent } from './../../shared/footer/footer.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array: any=[]
  object: any;
  compra:boolean=true;
  camisetas:string="../../../assets/img/tshirt-min.png";
  abrigos: string="../../../assets/img/hoodie-min.png";
  Gorras: string="../../../assets/img/Hat-min.png";
  Mochilas: string="../../../assets/img/backpack-min.png";
  Leggings: string="../../../assets/img/Leggings-min.png";
  Calcetines: string="../../../assets/img/socks-min.png";
  Franelas: string="../../../assets/img/tank-top-min.png";
  Relojes:string="../../../assets/img/Watch-min.png";
  Anillos:string="../../../assets/img/Ring-min.png";
  imgs:string[]= [this.camisetas,this.abrigos,this.Gorras,this.Mochilas,this.Leggings,this.Calcetines, this.Franelas,this.Relojes,this.Anillos];


  constructor(private serv:APIService, private Router:Router) { 
    
  }

  ngOnInit() {

    this.serv.getStock().subscribe((e:any)=>{
     
      this.array=e;
      
      console.log(e);
    })

    
   // this.imgs.push(this.camisetas,this.abrigos,this.Gorras,this.Mochilas,this.Leggings,this.Calcetines, this.Franelas,this.Relojes,this.Anillos)
  }

  setProduct(product:any){

    this.serv.setProduct(product);
    this.Router.navigate(['transactions']);
    

  }
  
  

}
