import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoodsRoutingModule } from './goods-routing.module';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsFormComponent } from './goods-form/goods-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [GoodsListComponent, GoodsFormComponent],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GoodsModule { }
