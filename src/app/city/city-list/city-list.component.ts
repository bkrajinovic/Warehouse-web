import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  constructor(
    private cityService: CityService,
    private toastr: ToastrService,
    private router: Router
  ) { }



  private cities = [];
  
  ngOnInit() {
    this.getAllCities();
  }


  getAllCities() {
    this.cityService.getAll().subscribe((response: any) => {
      this.cities = response;
    });
  }


  onDelete(cityId) {
    if(confirm('Da li ste sigurni?')) {
      this.cityService.deleteOne(cityId).subscribe(result => {
        this.getAllCities();
        this.toastr.success('Uspjesno obrisano');
      })
    }
  }

  onAdd() {
    this.router.navigate(['cities/new']);
  }

  onEdit(cityId) {
    this.router.navigate(['cities', cityId]);
  }
  

}
