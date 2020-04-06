import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  object:any;
  product:any[];

  constructor(private cliente:HttpClient) { }
//METODOS PARA OBTENER TODO EL STOCK Y EL PRODUCTO SELECCIONADO
  getStock(){
    return this.cliente.get("https://localhost:44329/api/busquedas/Obtener_stock/")
}
getProduct(){
  console.log(this.product);
  return this.product;
  
}
setProduct(_product:any){
  
  this.product=_product;
}
//PRODUCTOS

getProductName(id:any){
  return this.cliente.get("https://localhost:44329/api/busquedas/Obtener_productos_stock/"+id)
}
getProductos(){
  return this.cliente.get("https://localhost:44329/api/crud/Obtener_productos/")
}

addProduct(product:any){
  return this.cliente.post("https://localhost:44329/api/crud/agregar_productos/",product)
}

editProduct(product:any){
  return this.cliente.put("https://localhost:44329/api/crud/agregar_productos/",product)
}


deleteProduct(id:number)
{
  return this.cliente.delete("https://localhost:44329/api/crud/eliminar_productos/"+id)
}

/////////////////CLIENTES/////////////////////////////////////////

getCliente(){
  return this.cliente.get("https://localhost:44329/api/crud/Obtener_clientes/")
}

/////FACTURAS

addFactura(factura:any){
  return this.cliente.post('https://localhost:44329/api/crud/agregar_factura',factura);
}

//////ENTRADAS

getProveedores(){
  return this.cliente.get("https://localhost:44329/api/crud/Obtener_proveedores/")
}
addEntradas(entrada:any){
  return this.cliente.post('https://localhost:44329/api/crud/agregar_entrada',entrada);
}

}
