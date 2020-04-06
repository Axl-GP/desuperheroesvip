import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ProviderComponent } from './provider.component';


@NgModule({
  declarations: [ProviderComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedModule,
    FormsModule,ReactiveFormsModule,
  ]
})
export class ProviderModule { }
