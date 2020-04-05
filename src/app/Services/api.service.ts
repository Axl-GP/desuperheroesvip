import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  object:any;

  constructor(private cliente:HttpClient) { }

  getStock(){
    return this.cliente.get("https://localhost:44329/api/busquedas/Obtener_stock/")
}
}
