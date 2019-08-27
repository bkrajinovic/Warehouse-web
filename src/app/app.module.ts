import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityModule } from './city/city.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeModule } from './employee/employee.module';
import { GoodsModule } from './goods/goods.module';
import { PositionModule } from './position/position.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeModule } from './home/home.module';
import { GetstartedModule } from './getstarted/getstarted.module';
import { AuthTokenInterceptor } from './shared/auth-token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GetstartedModule,
    CityModule,
    HttpClientModule,
    WarehouseModule,
    EmployeeModule,
    GoodsModule,
    PositionModule,
    HomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
