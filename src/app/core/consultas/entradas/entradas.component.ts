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
  cargando: boolean= false;
  filtro:FormGroup;
  entrada:FormGroup;
  producto:any;
  fecha:any;
  proveedor:any;
  valor:any;
  dataFiltrada=[];
  busqueda:any;
  search:FormGroup;
  constructor(private serv:APIService, private router:Router, private builder:FormBuilder) { }

  ngOnInit(): void {
    
    this.search = this.builder.group({
      search:[''],
    })
    this.filtro=this.builder.group({
      filtro:['']
    })
    this.entrada=this.builder.group({
      proveedor:[''],
      producto:['']
    })
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.serv.getEntrada().subscribe((e:any)=>{
     
      return this.productos=e;
      
      console.log(e);
    })
  }

  capturar(){
    this.cargando=true;
    htmlToImage.toPng(document.getElementById('entrada'))
    .then(function (dataUrl){
      let pdf= new jspdf('p','cm','a4');
      pdf.addImage(dataUrl,'png',0,0,18.0,18.0);
      pdf.save("entrada.pdf")
    }).finally(()=>{
      this.cargando = false;
    })
  }

  decision(){
    const filtro=this.filtro.controls.filtro.value;


    var filtrado=filtro;
    let busqueda= this.search.get("search").value;
    let nombres;
    let proveedores;
    let fechas;

    for(let i = 0; i<this.productos.length; i++)
    {
      if(busqueda == this.productos[i].producto.nombre)
      {
        nombres = this.productos[i].producto.nombre;
      }else if(busqueda == this.productos[i].proveedor.nombre)
      {
        proveedores = this.productos[i].proveedor.nombre;
      }else if(busqueda == this.productos[i].fechaImporte)
      {
        fechas = this.productos[i].fechaImporte;
      }
    }

    if(nombres == busqueda)
    {
      if(filtrado=="suma"){
        this.sumaProducto(filtrado);
        console.log(nombres);
      }else if(filtrado=="conteo"){
        
        this.conteoProducto(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioProducto(filtrado);
      }
    }else if(proveedores==busqueda){
      if(filtrado=="suma"){
        this.sumaProveedor(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoProveedor(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioProveedor(filtrado);
      } 
    } else if(fechas==busqueda){
      
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
                this.serv.getEntradaProductoFiltro(this.search.get("search").value,filtro).subscribe((e:any)=>{
                  
                this.sumatoria=e;
                console.log(e);
                });
                console.log(this.busqueda);

            }

            sumaProveedor(filtro:string){
              this.serv.getEntradaProveedorFiltro(this.search.get("search").value,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });
            }
            sumaFecha(filtro:string){
              this.serv.getEntradaFechaFiltro(this.search.get("search").value,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });
            }



            promedioProveedor(filtrado:string){
            this.serv.getEntradaProveedorFiltro(this.search.get("search").value,filtrado).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            promedioFecha(filtrado:string){
            this.serv.getEntradaFechaFiltro(this.search.get("search").value,filtrado).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            promedioProducto(filtrado:string){
              this.serv.getEntradaProductoFiltro(this.search.get("search").value,filtrado).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });

            }

            conteoProveedor(filtro:string){
            this.serv.getEntradaProveedorFiltro(this.search.get("search").value,filtro).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            conteoFecha(filtro:string){
            this.serv.getEntradaFechaFiltro(this.search.get("search").value,filtro).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            conteoProducto(filtro:string){
              this.serv.getEntradaProductoFiltro(this.search.get("search").value,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });

            }


}
