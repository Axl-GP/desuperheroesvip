import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { CrudComponent } from './crud.component';
import { EditarComponent } from './editar/editar.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [CrudComponent, EditarComponent, AddProductComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    SharedModule,FormsModule,ReactiveFormsModule
  ]
})
export class CrudModule { }
