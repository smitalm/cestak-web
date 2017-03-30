import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { Trip } from '../api/api-model';

import * as toastr from 'toastr';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private api: ApiService, private modalService: NgbModal) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.api.trips.query()
      .toPromise()
      .then(trips => this.trips = trips);
  }

  editTrip(trip) {
    const modal = this.modalService.open(EditTripComponent);
    modal.componentInstance.trip = trip;
    modal.result
      .then(t => {
        this.api.trips.update(t).toPromise()
          .then(() => toastr.success('Trip saved!'), () => toastr.error('Trip not saved!'))
          .then(() => this.refresh());
      })
      .catch(() => {});
  }

  deleteTrip(trip) {
    this.api.trips.create(trip).toPromise()
      .then((deleted) => toastr.info(`trip deleted`), () => toastr.error('Trip not saved!'))
      .catch(() => {});
  }

  addTrip() {
    const modal = this.modalService.open(EditTripComponent);
    modal.result
      .then(t => {
        this.api.trips.create(t).toPromise()
          .then(() => toastr.success('Trip saved!'), () => toastr.error('Trip not saved!'))
          .then(() => this.refresh());
      })
      .catch(() => {});
  }

  showOnMap() {
    const modal = this.modalService.open(EditTripComponent);
    modal.result
      .then(t => {
        this.api.trips.create(t).toPromise()
          .then(() => toastr.success('Trip saved!'), () => toastr.error('Trip not saved!'))
          .then(() => this.refresh());
      })
      .catch(() => {});
  }

}
