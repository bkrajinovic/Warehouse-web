import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
import { WarehouseService } from 'src/app/warehouse/warehouse.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router,
    private toastr: ToastrService,
    private warehouseService: WarehouseService,
    private location: Location
  ) { }

  public employee : any = {};
  public warehouses: any = [];
  public selectedWarehouseId : any = {};
  public errorMessage = "";

  ngOnInit() {
    this.route.params.subscribe(params => {
      const employeeId = params['id'];
      if(employeeId != null) {
        this.getEmployee(employeeId);

        this.selectedWarehouseId = this.employee.warehouseId;
      }
      this.getWarehouses();
    });
  }

  getEmployee(employeeId) {
      this.employeeService.getOne(employeeId).subscribe(response => 
        {
          this.employee = response;
          this.employee.id = employeeId;
          this.selectedWarehouseId = this.employee.warehouseId;
        }
      );
  }

  onSubmit() {


    this.employee.warehouseId = this.selectedWarehouseId;
    this.employeeService.submit(this.employee).subscribe(
      (response: any) => {
        this.toastr.success('Success');
        this.router.navigate(['employees']);
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
  goBack() {
    this.location.back();
    return false;
  }


}
