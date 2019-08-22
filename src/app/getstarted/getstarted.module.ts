import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetstartedRoutingModule } from './getstarted-routing.module';
import { GetstartedListComponent } from './getstarted-list/getstarted-list.component';


@NgModule({
  declarations: [GetstartedListComponent],
  imports: [
    CommonModule,
    GetstartedRoutingModule
  ]
})
export class GetstartedModule { }
