import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { EntradasComponent } from './entradas/entradas.component';
import { FacturasComponent } from './facturas/facturas.component';
import * as jspdf from 'jspdf';

import htmlToImage from 'html-to-image';

@NgModule({
  declarations: [ConsultasComponent, ClientesComponent, ProductosComponent, ProveedoresComponent, EntradasComponent, FacturasComponent],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule,ReactiveFormsModule,
    SharedModule,
    Ng2SearchPipeModule
  ]
})
export class ConsultasModule { }
