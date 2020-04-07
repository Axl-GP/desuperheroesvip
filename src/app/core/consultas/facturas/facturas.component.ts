import { Builder } from 'protractor';
import { Router } from '@angular/router';
import { APIService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  productos:any;
  sumatoria:any;
  filtro:FormGroup;
  entrada:FormGroup;
  valor:any;
  busqueda;
  constructor(private serv:APIService, private router:Router, private builder:FormBuilder) { }

  ngOnInit(): void {
    this.serv.getFactura().subscribe((e:any)=>{
     
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

  decision(){
    const filtro=this.filtro.controls.filtro.value;

    var filtrado=filtro;

    
     if(this.busqueda.value==this.productos.nombre){

      if(filtrado=="suma"){
        this.sumaCliente(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoCliente(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioCliente(filtrado);

      }else if(filtrado=="maximo"){
        
        this.maximoCliente(filtrado);
      }else if(filtrado=="minimo"){
        this.minimoCliente(filtrado);
      }
    }else if(this.busqueda.value==this.productos.fecha){
      if(filtrado=="suma"){
        this.sumaFecha(filtrado);
      }else if(filtrado=="conteo"){
        
        this.conteoFecha(filtrado);
      }else if(filtrado=="promedio"){
        this.promedioFecha(filtrado);
      }

      if(filtrado=="maximo"){
        this.maximoFecha(filtrado);
      }else if(filtrado=="minimo"){
        
        this.minimoFecha(filtrado);
      }
    }
  }

              sumaCliente(filtro:string){
                this.serv.getFacturaClienteFiltro(this.busqueda,filtro).subscribe((e:any)=>{
                this.sumatoria=e;
                console.log(e);
                });

            }

            sumaFecha(filtro:string){
              this.serv.getFacturaFechaFiltro(this.busqueda,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });
            }
        



            promedioCliente(filtrado){
            this.serv.getFacturaClienteFiltro(this.busqueda,filtrado).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            promedioFecha(filtrado){
            this.serv.getFacturaFechaFiltro(this.busqueda,filtrado).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
           

            conteoCliente(filtro:string){
            this.serv.getFacturaClienteFiltro(this.busqueda,filtro).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
            conteoFecha(filtro:string){
            this.serv.getFacturaFechaFiltro(this.busqueda,filtro).subscribe((e:any)=>{
            this.sumatoria=e;
            console.log(e);
            });
            }
          
            minimoCliente(filtro:string){
              this.serv.getFacturaClienteFiltro(this.busqueda,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });
              }
              minimoFecha(filtro:string){
              this.serv.getFacturaFechaFiltro(this.busqueda,filtro).subscribe((e:any)=>{
              this.sumatoria=e;
              console.log(e);
              });
              }
          
              maximoCliente(filtro:string){
                this.serv.getFacturaClienteFiltro(this.busqueda,filtro).subscribe((e:any)=>{
                this.sumatoria=e;
                console.log(e);
                });
                }
                maximoFecha(filtro:string){
                this.serv.getFacturaFechaFiltro(this.busqueda,filtro).subscribe((e:any)=>{
                this.sumatoria=e;
                console.log(e);
                });
                }
              



}
