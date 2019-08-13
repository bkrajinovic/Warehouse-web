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


  private getRootUrl() {
    return environment.apiUrl + this.GOODS_URL;
  }

  private formatUrl(goodsId) {
    return this.getRootUrl() + '/' + goodsId;
  }

  public getAll() {
    return this.http.get(environment.apiUrl + this.GOODS_URL);
  }

  public getOne(goodsId) {
    return this.http.get(environment.apiUrl + this.GOODS_URL + '/' + goodsId);  }

  public deleteOne(goodsId) {
    return this.http.delete(environment.apiUrl + this.GOODS_URL + '/' + goodsId);  }
  

  public addOne(goods) {
    return this.http.post(this.getRootUrl(), goods);
  }

  public putOne(goodsId, goods) {
    return this.http.put(this.formatUrl(goodsId), goods);
  }

  public submit(goods) {
    if (!goods.id) {
      return this.addOne(goods);
    }

    return this.putOne(goods.id, goods);
  }
}

