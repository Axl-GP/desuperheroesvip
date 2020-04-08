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
  producto:any;
  fecha:any;
  proveedor:any;
  valor:any;
  dataFiltrada=[];
  busqueda;
  constructor(private serv:APIService, private router:Router, private builder:FormBuilder) { }

  ngOnInit(): void {
    

    this.filtro=this.builder.group({
      filtro:['']
    })
    this.entrada=this.builder.group({
      proveedor:[''],
      producto:['']
    })
  }

  obtenerProductos(){
    this.serv.getEntrada().subscribe((e:any)=>{
     
      return this.productos=e;
      
      console.log(e);
    })
  }

  capturar(){
    htmlToImage.toPng(document.getElementById('entrada'))
    .then(function (dataUrl){
      let pdf= new jspdf('p','cm','a4');
      pdf.addImage(dataUrl,'png',0,0,18.0,18.0);
      pdf.save("entrada.pdf")
    })
  }

  decision(){
    const filtro=this.filtro.controls.filtro.value;


    var filtrado=filtro;

    //let traerDatoEspecifico;

    
   
       /* for(var i=0;i<this.productos; i++){
          if(this.busqueda.value == this.productos[i].nombre)
          {
            this.dataFiltrada.push(this.productos[i].nombre);
            console.log(this.dataFiltrada);
              //traerDatoEspecifico =this.productos[i].nombre;

            }
            this.dataFiltrada.push(this.productos[i].nombre);
            console.log(this.dataFiltrada);
           
            console.log(this.productos);
          
          
          //console.log(this.productos[elem]);
          
          }
    
    console.log(this.busqueda);
    console.log(traerDatoEspecifico);
    console.log(this.productos);
   
*/
    if(this.busqueda.value=="Gorra Thor"){
      if(filtrado=="suma"){
        this.sumaProducto(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoProducto(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioProducto(filtrado);
      }
    
    } if(this.busqueda.value==this.productos.proveedor){


      if(filtrado=="suma"){
        this.sumaProveedor(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoProveedor(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioProveedor(filtrado);
      } 
    } if(this.busqueda.value==this.productos.fechaImporte){
      
      if(filtrado=="suma"){
        this.sumaFecha(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoFecha(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioFecha(filtrado);
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
            this.serv.getEntradaProveedorFiltro(this.busqueda,filtrado).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            promedioFecha(filtrado:string){
            this.serv.getEntradaFechaFiltro(this.busqueda,filtrado).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            promedioProducto(filtrado:string){
              this.serv.getEntradaProductoFiltro(this.busqueda,filtrado).subscribe((e:any)=>{
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
