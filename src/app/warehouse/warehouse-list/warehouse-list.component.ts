import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  constructor(
    private warehouseService: WarehouseService
  ) { }



  private warehouses = [];
  
  ngOnInit() {
    this.warehouseService.getAll().subscribe((response: any) => {
      this.warehouses = response;
    });
    }

}
