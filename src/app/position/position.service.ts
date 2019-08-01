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


  public getAll() {
    return this.http.get(environment.apiUrl + this.POSITIONS_URL);
  }
}
