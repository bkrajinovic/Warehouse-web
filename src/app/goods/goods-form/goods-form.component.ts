import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../goods.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WarehouseService } from 'src/app/warehouse/warehouse.service';

@Component({
  selector: 'app-goods-form',
  templateUrl: './goods-form.component.html',
  styleUrls: ['./goods-form.component.scss']
})
export class GoodsFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private goodsService: GoodsService,
    private router: Router,
    private toastr: ToastrService,
    private warehouseService: WarehouseService
  ) { }

    public goods : any = {};
    public warehouses: any = [];
    public selectedWarehouseId : any = {};
    public errorMessage = "";
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        const goodsId = params['id'];
        if(goodsId != null) {
          this.getGoods(goodsId);
  
          this.selectedWarehouseId = this.goods.warehouseId;
        }
        this.getWarehouses();
      });
    }
  
    getGoods(goodsId) {
        this.goodsService.getOne(goodsId).subscribe(response => 
          {
            this.goods = response;
            this.goods.id = goodsId;
            this.selectedWarehouseId = this.goods.warehouseId;
          }
        );
    }
  
    onSubmit() {
  
      this.goods.warehouseId = this.selectedWarehouseId;
      this.goodsService.submit(this.goods).subscribe(
        (response: any) => {
          this.toastr.success('Bravo');
          this.router.navigate(['goods']);
        },
        (response: any) => {
          const firstError = response.error.errors;
          const firstKey = Object.keys(firstError)[0];
          this.errorMessage = firstError[firstKey][0];
        });
    }
  
    getWarehouses() {
        this.warehouseService.getAll().subscribe(response => 
          {
            this.warehouses = response;
          }
        );
    }
  
  }