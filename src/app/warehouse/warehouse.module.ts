import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WarehouseListComponent, WarehouseFormComponent],
  imports: [
    CommonModule,
    WarehouseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class WarehouseModule { }
