import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './goods-list/goods-list.component';


const routes: Routes = [
  { path: 'goods', component: GoodsListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
