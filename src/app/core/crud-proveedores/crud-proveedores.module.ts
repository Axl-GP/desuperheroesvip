import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudProveedoresRoutingModule } from './crud-proveedores-routing.module';
import { CrudProveedoresComponent } from './crud-proveedores.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';


@NgModule({
  declarations: [CrudProveedoresComponent, EditarProveedorComponent, AgregarProveedorComponent],
  imports: [
    CommonModule,
    CrudProveedoresRoutingModule,
    SharedModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class CrudProveedoresModule { }
