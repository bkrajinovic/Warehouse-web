import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {

  constructor(
    private goodsService: GoodsService
  ) { }



  private goods = [];
  
  ngOnInit() {
    this.goodsService.getAll().subscribe((response: any) => {
      this.goods = response;
    });
    }


}
