import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Bill } from '../api/api-model';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  private bills: Bill[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.bills.query()
      .toPromise()
      .then(bills => this.bills = bills);
  }

}
