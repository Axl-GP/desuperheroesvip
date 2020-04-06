import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  object:any;
  product:any[];

  constructor(private cliente:HttpClient) { }

  getStock(){
    return this.cliente.get("https://localhost:44329/api/busquedas/Obtener_stock/")
}
//PRODUCTOS

getProductName(id:any){
  return this.cliente.get("https://localhost:44329/api/busquedas/Obtener_productos_stock/"+id)
}

getProduct(){
  console.log(this.product);
  return this.product;
  
}
setProduct(_product:any){
  
  this.product=_product;
}

addProduct(product:any){
  return this.cliente.get("https://localhost:44329/api/crud/agregar_productos/")
}

/////////////////CLIENTES/////////////////////////////////////////

getCliente(){
  return this.cliente.get("https://localhost:44329/api/crud/Obtener_clientes/")
}

/////FACTURAS

addFactura(factura:any){
  return this.cliente.post('https://localhost:44329/api/crud/agregar_factura',factura);

}
}
