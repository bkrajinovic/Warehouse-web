import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsFormComponent } from './goods-form/goods-form.component';


const routes: Routes = [
  { path: 'goods', component: GoodsListComponent },
  { path: 'goods/new', component: GoodsFormComponent },
  { path: 'goods/:id', component: GoodsFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
