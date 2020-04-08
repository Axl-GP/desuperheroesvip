import { Router } from '@angular/router';
import { APIService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import htmlToImage from 'html-to-image';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedor:any;
  cargando: boolean= false;
  busqueda;
  constructor(private serv:APIService,private router:Router) { }

  ngOnInit(): void {
    this.serv.getProveedores().subscribe((e:any)=>{
     
      this.proveedor=e;

      
      
      console.log(e);
    })
  }
  capturar(){
    this.cargando=true;
    htmlToImage.toPng(document.getElementById('proveedor'))
    .then(function (dataUrl){
      let pdf= new jspdf('p','cm','a4');
      pdf.addImage(dataUrl,'png',-3,0,25.0,15.0);
      pdf.save("proveedor.pdf")
    }).finally(()=>{
      this.cargando = false;
    })
  }

}
