import { APIService } from './../../../Services/api.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Builder } from 'protractor';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  add:FormGroup;
  array:any;
  constructor(private serv:APIService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.add=this.builder.group({
      nombre:['',Validators.required],
      precio:[0,Validators.required,Validators.min(0)],
      stockid:[1,Validators.required]
    })

    this.serv.getStock().subscribe((e:any)=>{
     
      this.array=e;
      
      console.log(e);
    })

  }
  agregarProducto(){
    
    const nombre=this.add.value.nombre;
    const precio=this.add.value.precio;
    const productoid=Number(this.add.controls.producto.value);

    let agregar=  {
      nombre:nombre,
      precio:precio,
      Stockid:productoid
    }
    console.log(agregar);
    
    this.serv.addProduct(agregar).subscribe(()=>{
      console.log("agregar exitoso");
      //this.reloadCurrentRoute();
    })
    
  }

}
