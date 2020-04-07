import { SharedModule } from './../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudClienteRoutingModule } from './crud-cliente-routing.module';
import { CrudClienteComponent } from './crud-cliente.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';


@NgModule({
  declarations: [CrudClienteComponent, AddClienteComponent, EditClienteComponent],
  imports: [
    CommonModule,
    CrudClienteRoutingModule,
    FormsModule,ReactiveFormsModule,
    SharedModule
  ]
})
export class CrudClienteModule { }
