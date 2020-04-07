import { Router } from '@angular/router';
import { APIService } from './../../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  busqueda;any
  productos:any=[];
  constructor(private serv:APIService, private router:Router) { }

  ngOnInit(): void {
    this.serv.getProductos().subscribe((e:any)=>{
     
      this.productos=e;
      
      console.log(e);
    })
  }

}
