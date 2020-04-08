import { APIService } from './../../Services/api.service';
import { SharedModule } from './../../shared/shared.module';
import { FooterComponent } from './../../shared/footer/footer.component';
import { HeaderComponent } from './../../shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { RegistroFacturaComponent } from './registro-factura/registro-factura.component';



@NgModule({
  declarations: [TransactionsComponent, RegistroFacturaComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule,ReactiveFormsModule,
    SharedModule
    
  ],
 
})
export class TransactionsModule { }
