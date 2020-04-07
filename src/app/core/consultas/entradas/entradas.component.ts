import { Router } from '@angular/router';
import { APIService } from '../../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import htmlToImage from 'html-to-image';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {

  productos:any;
  sumatoria:any;
  filtro:FormGroup;
  entrada:FormGroup;
  valor:any;
  busqueda;
  constructor(private serv:APIService, private router:Router, private builder:FormBuilder) { }

  ngOnInit(): void {
    this.serv.getEntrada().subscribe((e:any)=>{
     
      this.productos=e;
      
      console.log(e);
    })

    this.filtro=this.builder.group({
      filtro:['']
    })
    this.entrada=this.builder.group({
      proveedor:[''],
      producto:['']
    })
  }

  capturar(){
    htmlToImage.toPng(document.getElementById('imprimir'))
    .then(function (dataUrl){
      let pdf= new jspdf('p','cm','a4');
      pdf.addImage(dataUrl,'png',0,0,18.0,18.0);
      pdf.save("impresion.pdf")
    })
  }
  decision(){
    const filtro=this.filtro.controls.filtro.value;

    var filtrado=filtro;

    if(this.busqueda.value==this.productos.producto){
      if(filtrado=="suma"){
        this.sumaProducto(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoProducto(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioProducto(filtrado);
      }
    
    }else if(this.busqueda.value==this.productos.fechaImporte){

      if(filtrado=="suma"){
        this.sumaFecha(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoFecha(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioFecha(filtrado);
      }
    }else if(this.busqueda.value==this.productos.proveedor){
      
      
      if(filtrado=="suma"){
        this.sumaProveedor(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoProveedor(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioProveedor(filtrado);
      } 
      
    
  }
}

              sumaProducto(filtro:string){
                this.serv.getEntradaProductoFiltro(this.busqueda,filtro).subscribe((e:any)=>{
                this.sumatoria=e;
                console.log(e);
                });

            }

            sumaProveedor(filtro:string){
              this.serv.getEntradaProveedorFiltro(this.busqueda,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });
            }
            sumaFecha(filtro:string){
              this.serv.getEntradaFechaFiltro(this.busqueda,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });
            }



            promedioProveedor(filtrado:string){
            this.serv.getEntradaProveedorFiltro(this.busqueda.value,filtrado).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            promedioFecha(filtrado:string){
            this.serv.getEntradaFechaFiltro(this.busqueda.value,filtrado).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            promedioProducto(filtrado:string){
              this.serv.getEntradaProductoFiltro(this.busqueda.value,filtrado).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });

            }

            conteoProveedor(filtro:string){
            this.serv.getEntradaProveedorFiltro(this.busqueda,filtro).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            conteoFecha(filtro:string){
            this.serv.getEntradaFechaFiltro(this.busqueda,filtro).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            conteoProducto(filtro:string){
              this.serv.getEntradaProductoFiltro(this.busqueda,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });

            }


}
