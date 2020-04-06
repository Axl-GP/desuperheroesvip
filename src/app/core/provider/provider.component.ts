import { APIService } from './../../Services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {

  
  formularioEntrada:FormGroup;
  nombresProveedores:any=[];
  nombresProductos:any=[];

  productos:any;
  clientes:any;
  constructor(private serv:APIService, private builder:FormBuilder, private router:Router) {
    this.productos=serv.getProduct();
   }

  ngOnInit() {

    this.formularioEntrada=this.builder.group({
      cliente:[''],
      producto:[''],
      cantidad:[1,[Validators.min(1)]],
         })
    this.serv.getProveedores().subscribe((e:any)=>{
     
      this.nombresProveedores=e;
      
      console.log(e);
    })

    this.serv.getProductName(this.productos.id).subscribe((e:any)=>{
   
      this.nombresProductos=e;
      
      console.log(e);
    })
  }
  generarEntrada(){
    

    const proveedorid= Number(this.formularioEntrada.controls.cliente.value);
      
    const productoid=Number(this.formularioEntrada.controls.producto.value);
     
    //const stockid=this.productos.id;
    const cantidad= this.formularioEntrada.value.cantidad;

    const fecha= new Date();

  let entrada =  {

      
      productoid:productoid,
      proveedorid:proveedorid,
      cantidad:cantidad,
      fechaImporte:fecha
    }
    console.log(entrada);
    
    this.serv.addEntradas(entrada).subscribe(()=>{
      console.log("exitoso");
      this.reloadCurrentRoute();
    })

    
    
    
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.navigate(["home"]);
    this.router.navigateByUrl('/home', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}

}
