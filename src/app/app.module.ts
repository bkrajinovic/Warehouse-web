import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityModule } from './city/city.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';
import { GoodsModule } from './goods/goods.module';
import { PositionModule } from './position/position.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CityModule,
    HttpClientModule,
    WarehouseModule,
    EmployeeModule,
    GoodsModule,
    PositionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
