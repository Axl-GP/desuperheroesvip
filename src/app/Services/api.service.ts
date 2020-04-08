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
  return this.cliente.put("https://localhost:44329/api/crud/editar_productos/",product)
}


deleteProduct(id:number)
{
  return this.cliente.delete("https://localhost:44329/api/crud/eliminar_productos/"+id)
}
/////////////////PROVEEDORES////////////////
getProveedores(){
  return this.cliente.get("https://localhost:44329/api/crud/Obtener_proveedores/")
}

addProveedor(proveedor:any){
  return this.cliente.post("https://localhost:44329/api/crud/agregar_proveedores/",proveedor)
}

editProveedor(proveedor:any){
  return this.cliente.put("https://localhost:44329/api/crud/editar_proveedores/",proveedor)
}


deleteProveedor(id:number)
{
  return this.cliente.delete("https://localhost:44329/api/crud/eliminar_proveedores/"+id)
}


/////////////////CLIENTES/////////////////////////////////////////

getCliente(){
  return this.cliente.get("https://localhost:44329/api/crud/Obtener_clientes/")
}

addCliente(cliente:any){
  return this.cliente.post("https://localhost:44329/api/crud/agregar_clientes/",cliente)
}

editCliente(cliente:any){
  return this.cliente.put("https://localhost:44329/api/crud/editar_cliente/",cliente)
}

deleteCliente(id:number){
  return this.cliente.delete("https://localhost:44329/api/crud/eliminar_cliente/"+id)
}

/////FACTURAS

addFactura(factura:any){
  return this.cliente.post('https://localhost:44329/api/crud/agregar_factura',factura);
}

getFactura(){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_facturacion');
}
getFacturaFecha(fecha:Date){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_facturacion_fecha/'+fecha);
}
getFacturaFechaFiltro(fecha:Date,filtro:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_facturacion_fecha/'+fecha+'&&'+filtro);
}

getFacturaCliente(cliente:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_facturacion_fecha/'+cliente);
}
getFacturaClienteFiltro(cliente:string,filtro:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_facturacion_cliente/'+cliente+'&&'+filtro);
}
//////ENTRADAS


addEntradas(entrada:any){
  return this.cliente.post('https://localhost:44329/api/crud/agregar_entrada',entrada);
}
getEntrada(){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_entrada');

}

getEntradaFecha(fecha:Date){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_entrada_fecha/'+fecha);
}
getEntradaFechaFiltro(fecha:Date,filtro:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_entrada_fecha_filtro/'+fecha+'&&'+filtro);
}

getEntradaProducto(producto:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_entrada_producto/'+producto);
}
getEntradaProductoFiltro(producto:string,filtro:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_entrada_producto/'+producto+'&&'+filtro);
}

getEntradaProveedor(proveedor:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_entrada_proveedor/'+proveedor);
}
getEntradaProveedorFiltro(proveedor:string,filtro:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_entrada_proveedor_filtro/'+proveedor+'&&'+filtro);
}


/////CONSULTAS


/////CLIENTES
getClientesNombre(nombre:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_clientes_nombre/'+nombre);
}

getClientesCategoria(categoria:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_clientes_categoria/'+categoria);
}
getClientesCategoriaFiltro(categoria:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_clientes_categoria_filtro/'+categoria);
}
/////PRODUCTOS
getProductosNombre(producto:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_productos_nombre/'+producto);
}


///PROVEEDORES

getProveedoresNombre(nombre:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_proveedores_nombre/'+nombre);
}
getProveedoresEmail(email:string){
  return this.cliente.get('https://localhost:44329/api/busquedas/obtener_proveedores_email/'+email);
}

}
