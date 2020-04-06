import { APIService } from './../../../Services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  editar:FormGroup
  producto:any;
  array:any;
  constructor(private serv:APIService, private builder:FormBuilder, private router:Router) {
    this.producto=this.serv.getProduct();
   }

  ngOnInit(): void {
    
    this.editar=this.builder.group({
      nombre:[this.producto.nombre,[Validators.required]],
      precio:[this.producto.precio,[Validators.required,Validators.min(1)]],
      stockid:['',[Validators.required]]
    })

    this.serv.getStock().subscribe((e:any)=>{
     
      this.array=e;
      
      console.log(e);
    })

  }

  editarProducto(){
    const id= this.producto.id;
    const nombre=this.editar.value.nombre;
    const precio=this.editar.value.precio;
    const stockid=Number(this.editar.controls.stockid.value);

    let edicion =  {

      id:id,
      nombre:nombre,
      precio:precio,
      stockid:stockid
    }
    console.log(edicion);
    
    this.serv.editProduct(edicion).subscribe(()=>{
      console.log("exitoso");
      this.ngOnInit();
      this.router.navigate(['crud']);
    })
    
  }
  
}


