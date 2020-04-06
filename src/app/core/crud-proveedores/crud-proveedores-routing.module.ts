import { AgregarProveedorComponent } from './agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './editar-proveedor/editar-proveedor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudProveedoresComponent } from './crud-proveedores.component';

const routes: Routes = [{ path: '', component: CrudProveedoresComponent },
{path:'edit-proveedor', component:EditarProveedorComponent},{ path:'add-proveedor',component:AgregarProveedorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudProveedoresRoutingModule { }
