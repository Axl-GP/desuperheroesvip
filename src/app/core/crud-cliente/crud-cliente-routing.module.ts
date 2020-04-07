import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudClienteComponent } from './crud-cliente.component';

const routes: Routes = [{ path: '', component: CrudClienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudClienteRoutingModule { }
