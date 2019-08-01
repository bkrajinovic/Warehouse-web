import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';


@NgModule({
  declarations: [WarehouseListComponent],
  imports: [
    CommonModule,
    WarehouseRoutingModule
  ]
})
export class WarehouseModule { }
