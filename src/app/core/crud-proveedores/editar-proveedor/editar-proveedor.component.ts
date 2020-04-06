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
  constructor(private serv:APIService, private builder:FormBuilder, private router:Router) {
    this.proveedor=this.serv.getProduct();
   }

  ngOnInit(): void {
    
    this.editar=this.builder.group({
      nombre:[this.proveedor.nombre,[Validators.required]],
      precio:[this.proveedor.precio,[Validators.required,Validators.min(1)]],
      stockid:['']
    })

    this.serv.getProveedores().subscribe((e:any)=>{
     
      this.array=e;
      
      console.log(e);
    })

  }

  editarProveedor(){
    const id= this.proveedor.id;
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
