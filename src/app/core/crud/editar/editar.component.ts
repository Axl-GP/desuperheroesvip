import { APIService } from './../../../Services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  editar:FormGroup
  producto:any
  array:any;
  constructor(private serv:APIService, private builder:FormBuilder) {
    this.producto=this.serv.getProduct();
   }

  ngOnInit(): void {

    this.editar=this.builder.group({
      nombre:['',Validators.required],
      precio:[0,Validators.required,Validators.min(0)],
      stockid:[1,Validators.required]
    })

    this.serv.getStock().subscribe((e:any)=>{
     
      this.array=e;
      
      console.log(e);
    })

  }

  editarProducto(){
    const nombre=this.editar.value.nombre;
    const precio=this.editar.value.precio;
    const productoid=Number(this.editar.controls.producto.value);

    let edicion =  {

      
      productoid:productoid,
      nombre:nombre,
      precio:precio,
      Stockid:productoid
    }
    console.log(edicion);
    
    this.serv.editProduct(edicion).subscribe(()=>{
      console.log("exitoso");
      //this.reloadCurrentRoute();
    })
    
  }

}
