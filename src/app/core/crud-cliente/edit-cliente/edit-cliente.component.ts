import { Router } from '@angular/router';
import { APIService } from './../../../Services/api.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  editar:FormGroup
  cliente:any;
  array:any;
  constructor(private serv:APIService, private builder:FormBuilder, private router:Router) {
    this.cliente=this.serv.getProduct();
   }
   ngOnInit(): void {
    this.editar=this.builder.group({
      nombre:[this.cliente.nombre,[Validators.required,Validators.minLength(3),Validators.maxLength(60)]],
      RNC:[this.cliente.rnc,[Validators.required,Validators.minLength(11),Validators.maxLength(11)]],
      telefono:[this.cliente.telefono,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email:[this.cliente.email,[Validators.required,Validators.email]],
      categoria:[this.cliente.categoria,[Validators.required]]

    
    })



  }
  editarCliente(){
    const id=this.cliente.id;
    const nombre=this.editar.value.nombre;
    const RNC=String(this.editar.value.RNC);
    const telefono=String(this.editar.value.telefono);
    const email=this.editar.value.email;
    const categoria=this.editar.controls.categoria.value;
    
    let edit=  {
      id:id,
      nombre:nombre,
      RNC:RNC,
      telefono:telefono,
      email:email,
      categoria:categoria
    }
    console.log(edit);
    
    this.serv.editCliente(edit).subscribe(()=>{
      console.log("editar exitoso");
      this.ngOnInit();
      this.router.navigate(['home']);
      //this.reloadCurrentRoute();
    })
    
  }

}
