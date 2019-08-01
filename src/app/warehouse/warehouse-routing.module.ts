import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';


const routes: Routes = [
  { path: 'warehouses', component: WarehouseListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
