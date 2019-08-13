import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionListComponent } from './position-list/position-list.component';
import { PositionFormComponent } from './position-form/position-form.component';


const routes: Routes = [
  { path: 'positions', component: PositionListComponent },
  { path: 'positions/new', component: PositionFormComponent },
  { path: 'positions/:id', component: PositionFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionRoutingModule { }
