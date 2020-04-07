import { APIService } from './../../../Services/api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css']
})
export class EditarProveedorComponent implements OnInit {

  editar:FormGroup
  proveedor:any;
  array:any;
  constructor(private serv:APIService,private builder:FormBuilder, private router:Router) { 
    this.proveedor=serv.getProduct();
  }

  ngOnInit(): void {
    this.editar=this.builder.group({
      nombre:[this.proveedor.nombre,[Validators.required,Validators.minLength(3),Validators.maxLength(60)]],
      RNC:[this.proveedor.rnc,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      telefono:[this.proveedor.telefono,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:[this.proveedor.email,[Validators.required,Validators.email]]
    
    })



  }
  editProveedor(){
    
    const nombre=this.editar.value.nombre;
    const RNC=String(this.editar.value.RNC);
    const telefono= String(this.editar.value.telefono);
    const email=this.editar.value.email;
    
    let agregar=  {
      id:this.proveedor.id,
      nombre:nombre,
      rnc:RNC,
      telefono:telefono,
      email:email,
    }
    console.log(agregar);
    
    this.serv.editProveedor(agregar).subscribe(()=>{
      console.log("editar exitoso");
      this.ngOnInit();
      this.router.navigate(['home']);
      //this.reloadCurrentRoute();
    })
    
  }

}