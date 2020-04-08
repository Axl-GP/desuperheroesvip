import { Router } from '@angular/router';
import { APIService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import htmlToImage from 'html-to-image';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  busqueda;any
  productos:any=[];
  constructor(private serv:APIService, private router:Router) { }

  ngOnInit(): void {
    this.serv.getProductos().subscribe((e:any)=>{
     
      this.productos=e;
      
      console.log(e);
    })
  }
  capturar(){
    htmlToImage.toPng(document.getElementById('producto'))
    .then(function (dataUrl){
      let pdf= new jspdf('p','cm','a4');
      pdf.addImage(dataUrl,'png',0,0,20.0,18.0);
      pdf.save("producto.pdf")
    })
  }

}
