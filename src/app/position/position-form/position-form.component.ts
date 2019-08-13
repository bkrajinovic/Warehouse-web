import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-position-form',
  templateUrl: './position-form.component.html',
  styleUrls: ['./position-form.component.scss']
})
export class PositionFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private positionService: PositionService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  public position : any = {};
  public errorMessage = "";


  ngOnInit() {
    this.route.params.subscribe(params => {
      const positionId = params['id'];
      if(positionId != null) {
        this.getPosition(positionId);
      }
    });
  }

  getPosition(positionId) {
      this.positionService.getOne(positionId).subscribe(response => 
        {
          this.position = response;
        }
      );
  }

  onSubmit() {
    this.positionService.submit(this.position).subscribe(
      (response: any) => {
        this.toastr.success('Bravo');
        this.router.navigate(['positions']);
      },
      (response: any) => {
        const firstError = response.error.errors;
        const firstKey = Object.keys(firstError)[0];
        this.errorMessage = firstError[firstKey][0];
      });
  }

}

