import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionListComponent } from './position-list/position-list.component';


const routes: Routes = [
  { path: 'positions', component: PositionListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
