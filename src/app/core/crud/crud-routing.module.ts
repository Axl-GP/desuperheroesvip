import { AddProductComponent } from './add-product/add-product.component';
import { EditarComponent } from './editar/editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudComponent } from './crud.component';

const routes: Routes = [{ path: '', component: CrudComponent },{ path:'edit',component:EditarComponent},
{ path:'add-product',component:AddProductComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
