import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WarehouseService } from '../warehouse.service';
import { ToastrService } from 'ngx-toastr';
import { CityService } from 'src/app/city/city.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-warehouse-form',
  templateUrl: './warehouse-form.component.html',
  styleUrls: ['./warehouse-form.component.scss']
})
export class WarehouseFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private router: Router,
    private toastr: ToastrService,
    private cityService: CityService,
    private location: Location
  ) { }

  public warehouse : any = {};
  public cities: any = [];
  public selectedCityId : any = {};
  public errorMessage = "";

  ngOnInit() {
    this.route.params.subscribe(params => {
      const warehouseId = params['id'];
      if(warehouseId != null) {
        this.getWarehouse(warehouseId);

        this.selectedCityId = this.warehouse.cityId;
      }
      this.getCities();
    });
  }

  getWarehouse(warehouseId) {
      this.warehouseService.getOne(warehouseId).subscribe(response => 
        {
          this.warehouse = response;
          this.warehouse.id = warehouseId;
          this.selectedCityId = this.warehouse.cityId;
        }
      );
  }

  onSubmit() {

    this.warehouse.cityId = this.selectedCityId;
    this.warehouseService.submit(this.warehouse).subscribe(
      (response: any) => {
        this.toastr.success('Success');
        this.router.navigate(['warehouses']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

  getCities() {
      this.cityService.getAll().subscribe(response => 
        {
          this.cities = response;
        }
      );
  }

  goBack() {
    this.location.back();
    return false;
  }

}
