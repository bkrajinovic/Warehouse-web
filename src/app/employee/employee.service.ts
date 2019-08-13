import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly EMPLOYEES_URL = 'employees';


  private getRootUrl() {
    return environment.apiUrl + this.EMPLOYEES_URL;
  }

  private formatUrl(employeeId) {
    return this.getRootUrl() + '/' + employeeId;
  }

  public getAll() {
    return this.http.get(environment.apiUrl + this.EMPLOYEES_URL);
  }

  public getOne(employeeId) {
    return this.http.get(environment.apiUrl + this.EMPLOYEES_URL + '/' + employeeId);  }

  public deleteOne(employeeId) {
    return this.http.delete(environment.apiUrl + this.EMPLOYEES_URL + '/' + employeeId);  }
  

  public addOne(employee) {
    return this.http.post(this.getRootUrl(), employee);
  }

  public putOne(employeeId, employee) {
    return this.http.put(this.formatUrl(employeeId), employee);
  }

  public submit(employee) {
    if (!employee.id) {
      return this.addOne(employee);
    }

    return this.putOne(employee.id, employee);
  }
}
