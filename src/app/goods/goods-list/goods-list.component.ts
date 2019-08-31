import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../goods.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  constructor(
    private goodsService: GoodsService,
    private toastr: ToastrService,
    private router: Router
  ) { }



  private goods = [];
  
  ngOnInit() {
    this.getAllGoods();
  }


  getAllGoods() {
    this.goodsService.getAll().subscribe((response: any) => {
      this.goods = response;
    });
  }


  onDelete(goodsId) {
    if(confirm('Are you sure?')) {
      this.goodsService.deleteOne(goodsId).subscribe(result => {
        this.getAllGoods();
        this.toastr.success('Deleted successfully');
      })
    }
  }

  onAdd() {
    this.router.navigate(['goods/new']);
  }

  onEdit(goodsId) {
    this.router.navigate(['goods', goodsId]);
  }
  



}
