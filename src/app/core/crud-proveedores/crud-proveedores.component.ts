import { APIService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-proveedores',
  templateUrl: './crud-proveedores.component.html',
  styleUrls: ['./crud-proveedores.component.css']
})
export class CrudProveedoresComponent implements OnInit {

  proveedor:any=[];
  constructor(private serv:APIService, private router:Router) { }

  ngOnInit(): void {
    this.serv.getProveedores().subscribe((e:any)=>{
     
      this.proveedor=e;
      
      console.log(e);
    })
  }

  editProveedor(proveedor:any){

    this.serv.setProduct(proveedor);
    this.router.navigate(['/edit-proveedor']);
    

  }
  deleteProveedor(id:number){

    this.serv.deleteProveedor(id).subscribe(()=>{
      console.log("se ha eliminado de forma exitosa")
      this.ngOnInit();
    });
    //console.log(id);
   
  
  }
  
}
