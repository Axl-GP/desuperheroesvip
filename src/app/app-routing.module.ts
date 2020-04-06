import { AgregarProveedorComponent } from './core/crud-proveedores/agregar-proveedor/agregar-proveedor.component';
import { EditarProveedorComponent } from './core/crud-proveedores/editar-proveedor/editar-proveedor.component';
import { AddProductComponent } from './core/crud/add-product/add-product.component';
import { EditarComponent } from './core/crud/editar/editar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)},
{path:'edit', component:EditarComponent},{ path:'add-product',component:AddProductComponent},
{path:'edit-proveedor', component:EditarProveedorComponent},{ path:'add-proveedor',component:AgregarProveedorComponent},
 { path: 'home', loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) },
  { path: 'crud', loadChildren: () => import('./core/crud/crud.module').then(m => m.CrudModule) }, 
 { path: 'consultas', loadChildren: () => import('./core/consultas/consultas.module').then(m => m.ConsultasModule) },
  { path: 'transactions', loadChildren: () => import('./core/transactions/transactions.module').then(m => m.TransactionsModule) },
{path:'',pathMatch:"full",redirectTo:'home'},
{ path: 'provider', loadChildren: () => import('./core/provider/provider.module').then(m => m.ProviderModule) },
{ path: 'crudProveedores', loadChildren: () => import('./core/crud-proveedores/crud-proveedores.module').then(m => m.CrudProveedoresModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
