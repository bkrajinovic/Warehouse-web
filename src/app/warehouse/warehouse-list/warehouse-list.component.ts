import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../warehouse.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  constructor(
    private warehouseService: WarehouseService,
    private toastr: ToastrService,
    private router: Router
  ) { }



  private warehouses = [];
  
  ngOnInit() {
    this.getAllWarehouses();
  }


  getAllWarehouses() {
    this.warehouseService.getAll().subscribe((response: any) => {
      this.warehouses = response;
    });
  }


  onDelete(warehouseId) {
    if(confirm('Are you sure?')) {
      this.warehouseService.deleteOne(warehouseId).subscribe(result => {
        this.getAllWarehouses();
        this.toastr.success('Deleted successfully');
      })
    }
  }

  onAdd() {
    this.router.navigate(['warehouses/new']);
  }

  onEdit(warehouseId) {
    this.router.navigate(['warehouses', warehouseId]);
  }

}
