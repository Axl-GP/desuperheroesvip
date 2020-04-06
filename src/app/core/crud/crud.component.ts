import { APIService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  productos:any=[];
  constructor(private serv:APIService, private router:Router) { }

  ngOnInit(): void {
    this.serv.getProductos().subscribe((e:any)=>{
     
      this.productos=e;
      
      console.log(e);
    })
  }

  editProduct(product:any){

    this.serv.setProduct(product);
    this.router.navigateByUrl("/edit");
    

  }
  deleteProduct(id:number){

    this.serv.deleteProduct(id).subscribe(()=>{
      console.log("se ha eliminado de forma exitosa")
      this.reloadCurrentRoute();
    });
    //console.log(id);
   
  
  }
  reloadCurrentRoute() {
    window.location.reload();
}
}
