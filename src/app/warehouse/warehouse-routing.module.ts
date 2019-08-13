import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseListComponent } from './warehouse-list/warehouse-list.component';
import { WarehouseFormComponent } from './warehouse-form/warehouse-form.component';


const routes: Routes = [
  { path: 'warehouses', component: WarehouseListComponent },
  { path: 'warehouses/new', component: WarehouseFormComponent },
  { path: 'warehouses/:id', component: WarehouseFormComponent }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseRoutingModule { }
