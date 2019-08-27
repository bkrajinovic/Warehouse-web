import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JwtHelper } from '../auth/jwt.helper';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http: HttpClient,
    private jwt: JwtHelper
  ) { }

  private readonly EMPLOYEES_URL = 'employees';


  private getRootUrl() {
    return environment.apiUrl + this.EMPLOYEES_URL;
  }

  private formatUrl(employeeId) {
    return this.getRootUrl() + '/' + employeeId;
  }

  public getAll() {
    const token = this.jwt.getFullToken();
    let headers = new  HttpHeaders().set("Authorization", token);
    return this.http.get(environment.apiUrl + this.EMPLOYEES_URL, { headers });
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
