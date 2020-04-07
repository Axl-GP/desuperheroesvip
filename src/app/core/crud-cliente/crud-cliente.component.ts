import { Router } from '@angular/router';
import { APIService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-cliente',
  templateUrl: './crud-cliente.component.html',
  styleUrls: ['./crud-cliente.component.css']
})
export class CrudClienteComponent implements OnInit {

  proveedor:any=[];
  constructor(private serv:APIService, private router:Router) { }

  ngOnInit(): void {
    this.serv.getCliente().subscribe((e:any)=>{
     
      this.proveedor=e;
      
      console.log(e);
    })
  }

  editCliente(cliente:any){

    this.serv.setProduct(cliente);
    this.router.navigate(['/edit-cliente']);
    

  }
  deleteCliente(id:number){

    this.serv.deleteCliente(id).subscribe(()=>{
      console.log("se ha eliminado de forma exitosa")
      this.ngOnInit();
    });
    //console.log(id);
   
  
  }
  
}
