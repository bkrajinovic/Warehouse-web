import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionFormComponent } from './position-form/position-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PositionListComponent, PositionFormComponent],
  imports: [
    CommonModule,
    PositionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PositionModule { }
