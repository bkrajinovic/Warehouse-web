import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private toastr: ToastrService,
    private router: Router
  ) { }



  private employees = [];
  
  ngOnInit() {
    this.getAllEmployee();
  }


  getAllEmployee() {
    this.employeeService.getAll().subscribe((response: any) => {
      this.employees = response;
    });
  }


  onDelete(employeeId) {
    if(confirm('Are you sure?')) {
      this.employeeService.deleteOne(employeeId).subscribe(result => {
        this.getAllEmployee();
        this.toastr.success('Deleted successfully');
      })
    }
  }

  onAdd() {
    this.router.navigate(['employees/new']);
  }

  onEdit(employeeId) {
    this.router.navigate(['employees', employeeId]);
  }

}



