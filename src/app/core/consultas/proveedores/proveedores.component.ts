import { Router } from '@angular/router';
import { APIService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedor:any;
  busqueda;
  constructor(private serv:APIService,private router:Router) { }

  ngOnInit(): void {
    this.serv.getProveedores().subscribe((e:any)=>{
     
      this.proveedor=e;

      
      
      console.log(e);
    })
  }

}
