import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }, { path: 'home', loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) }, { path: 'crud', loadChildren: () => import('./core/crud/crud.module').then(m => m.CrudModule) }, { path: 'consultas', loadChildren: () => import('./core/consultas/consultas.module').then(m => m.ConsultasModule) }, { path: 'transactions', loadChildren: () => import('./core/transactions/transactions.module').then(m => m.TransactionsModule) },
{path:'',pathMatch:"full",redirectTo:'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
