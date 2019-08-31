import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {

  constructor(
    private positionService: PositionService,
    private toastr: ToastrService,
    private router: Router
  ) { }



  private positions = [];
  
  ngOnInit() {
    this.getAllPositions();
  }


  getAllPositions() {
    this.positionService.getAll().subscribe((response: any) => {
      this.positions = response;
    });
  }


  onDelete(positionId) {
    if(confirm('Are you sure?')) {
      this.positionService.deleteOne(positionId).subscribe(result => {
        this.getAllPositions();
        this.toastr.success('Deleted successfully');
      })
    }
  }

  onAdd() {
    this.router.navigate(['positions/new']);
  }

  onEdit(positionId) {
    this.router.navigate(['positions', positionId]);
  }
}
