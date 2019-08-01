import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService
  ) { }



  private employees = [];
  
  ngOnInit() {
    this.employeeService.getAll().subscribe((response: any) => {
      this.employees = response;
    });
    }


}
