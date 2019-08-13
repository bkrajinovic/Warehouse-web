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


  private getRootUrl() {
    return environment.apiUrl + this.WAREHOUSES_URL;
  }

  private formatUrl(warehouseId) {
    return this.getRootUrl() + '/' + warehouseId;
  }

  public getAll() {
    return this.http.get(environment.apiUrl + this.WAREHOUSES_URL);
  }

  public getOne(warehouseId) {
    return this.http.get(environment.apiUrl + this.WAREHOUSES_URL + '/' + warehouseId);  }

  public deleteOne(warehouseId) {
    return this.http.delete(environment.apiUrl + this.WAREHOUSES_URL + '/' + warehouseId);  }
  

  public addOne(warehouse) {
    return this.http.post(this.getRootUrl(), warehouse);
  }

  public putOne(warehouseId, warehouse) {
    return this.http.put(this.formatUrl(warehouseId), warehouse);
  }

  public submit(warehouse) {
    if (!warehouse.id) {
      return this.addOne(warehouse);
    }

    return this.putOne(warehouse.id, warehouse);
  }
}
