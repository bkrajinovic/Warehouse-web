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


  public getAll() {
    return this.http.get(environment.apiUrl + this.EMPLOYEES_URL);
  }
}
