import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly GOODS_URL = 'goods';


  public getAll() {
    return this.http.get(environment.apiUrl + this.GOODS_URL);
  }}
