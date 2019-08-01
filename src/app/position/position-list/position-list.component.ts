import { Component, OnInit } from '@angular/core';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {

  constructor(
    private PositionService: PositionService
  ) { }



  private positions = [];
  
  ngOnInit() {
    this.PositionService.getAll().subscribe((response: any) => {
      this.positions = response;
    });
    }
}
