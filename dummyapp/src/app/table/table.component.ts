import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AnimaleService } from '../animale.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  data: any = [];
  constructor(public router: Router, private animale: AnimaleService) {
    this.animale.getData().subscribe((data) => {
      console.warn(data);
      this.data = data;
    });
  }

  ngOnInit(): void {}
}
