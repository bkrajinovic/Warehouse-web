import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../city.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private router: Router,
    private toastr: ToastrService

  ) { }

  public city : any = {};

  public errorMessage = "";

  ngOnInit() {
    this.route.params.subscribe(params => {
      const cityId = params['id'];
      if(cityId != null) {
        this.getCity(cityId);
      }
    });
  }

  getCity(cityId) {
      this.cityService.getOne(cityId).subscribe(response => 
        {
          this.city = response;
        }
      );
  }

  onSubmit() {
    this.cityService.submit(this.city).subscribe(
      (response: any) => {
        this.toastr.success('Bravo');
        this.router.navigate(['cities']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

}
