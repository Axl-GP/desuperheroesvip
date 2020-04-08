import { APIService } from './../../Services/api.service';
import { FormGroup, Form, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  listaClientes:FormGroup;
  listaProductos:FormGroup;
  formularioCompra:FormGroup;
  nombresClientes:any=[];
  nombresProductos:any=[];

  productos:any;
  clientes:any;
  constructor(private serv:APIService, private builder:FormBuilder, private router:Router) {
    this.productos=serv.getProduct();
   }

  ngOnInit() {
  
    this.formularioCompra=this.builder.group({
      cliente:[''],
      producto:[''],
      cantidad:[1,[Validators.min(1)]],
         })
    this.serv.getCliente().subscribe((e:any)=>{
     
      this.nombresClientes=e;
      
      console.log(e);
    })

    this.serv.getProductName(this.productos.id).subscribe((e:any)=>{
   
      this.nombresProductos=e;
      
      console.log(e);
    })
   
  }

  AumentarExistencia(){
    this.serv.setProduct(this.productos);
    this.router.navigate(['/provider']);
  }

 
  

  generarCompra(){
    

    const clienteid= Number(this.formularioCompra.controls.cliente.value);
      
    const productoid=Number(this.formularioCompra.controls.producto.value);
     
    //const stockid=this.productos.id;
    const cantidad= this.formularioCompra.value.cantidad;

    const fecha= new Date();

  let factura =  {

      
      productoid:productoid,
      clienteid:clienteid,
      cantidad:cantidad,
      fechaFactura:fecha
    }
    console.log(factura);
    
    this.serv.addFactura(factura).subscribe(()=>{
      console.log("exitoso");
      this.ngOnInit();
    })

    
    
    
  }
  
}

