import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly WAREHOUSES_URL = 'warehouses';


  public getAll() {
    return this.http.get(environment.apiUrl + this.WAREHOUSES_URL);
  }
}
