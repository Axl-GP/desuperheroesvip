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
      nombre:[this.cliente.nombre,[Validators.required]],
      precio:[this.cliente.precio,[Validators.required,Validators.min(1)]],
      stockid:['']
    })

    /*this.serv.getClientes().subscribe((e:any)=>{
     
      this.array=e;
      
      console.log(e);
    })
*/
  }

  editarCliente(){
    const id= this.cliente.id;
    const nombre=this.editar.value.nombre;
    const precio=this.editar.value.precio;
   

    let edicion =  {

      id:id,
      nombre:nombre,
      precio:precio,
      
    }
    console.log(edicion);
    
    this.serv.editProduct(edicion).subscribe(()=>{
      console.log("exitoso");
      this.ngOnInit();
      this.router.navigate(['crud-cliente']);
    })
    
  }


}
