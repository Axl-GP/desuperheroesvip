import { APIService } from './../../../Services/api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-proveedor',
  templateUrl: './agregar-proveedor.component.html',
  styleUrls: ['./agregar-proveedor.component.css']
})
export class AgregarProveedorComponent implements OnInit {

  add:FormGroup;
  array:any;
  constructor(private serv:APIService,private builder:FormBuilder) { }

  ngOnInit(): void {
    this.add=this.builder.group({
      nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(60)]],
      RNC:['',[Validators.required,Validators.minLength(13),Validators.maxLength(13)]],
      telefono:['',Validators.required,Validators.minLength(3),Validators.maxLength(60)],
      email:['',[Validators.required,Validators.email]]
    
    })


  }
  agregarProveedor(){
    
    const nombre=this.add.value.nombre;
    const RNC=this.add.value.RNC;
    const telefono=this.add.value.telefono;
    const email=this.add.value.email;
    
    let agregar=  {
      nombre:nombre,
      RNC:RNC,
      telefono:telefono,
      email:email,
    }
    console.log(agregar);
    
    this.serv.addProduct(agregar).subscribe(()=>{
      console.log("agregar exitoso");
      //this.reloadCurrentRoute();
    })
    
  }

}
