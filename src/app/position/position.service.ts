import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private http: HttpClient
  ) { }

  private readonly POSITIONS_URL = 'positions';


  private getRootUrl() {
    return environment.apiUrl + this.POSITIONS_URL;
  }

  private formatUrl(positionId){
    return this.getRootUrl() + '/' + positionId;
  }


  public getAll() {
    return this.http.get(environment.apiUrl + this.POSITIONS_URL);
  }

  public deleteOne(positionId) {
    return this.http.delete(environment.apiUrl + this.POSITIONS_URL + '/' + positionId);
  }


  public getOne(positionId) {
    return this.http.get(environment.apiUrl + this.POSITIONS_URL + '/' + positionId);
  }

  public addOne(position) {
    return this.http.post(this.getRootUrl(), position);
  }

  public putOne(positionId, position) {
    return this.http.put(this.formatUrl(positionId), position);
  }

  public submit(position) {
    if(!position.id) {
      return this.addOne(position);
    }

    return this.putOne(position.id, position);
  }
}

