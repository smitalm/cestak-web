import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Trip, Waypoint } from '../../api/api-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-trip',
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.scss']
})
export class EditTripComponent implements OnInit, OnChanges {
  @Input() trip: Trip;
  @Input() title: string;

  public form: FormGroup;

  constructor(public modal: NgbActiveModal, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    if (this.trip == null) {
      this.trip = new Trip();
      this.title = 'Add new trip';
    } else {
      this.title = 'Edit trip';
    }
  }

  ngOnChanges() {
    this.resetForm();
  }

  resetForm() {
    this.form.reset({
      startTime: this.trip.startTime,
      // startLocation: {
      //   coordinates: `${this.trip.startLocation.coordinates.lat},${this.trip.startLocation.coordinates.lng}`,
      //   description: this.trip.startLocation.description
      // },
      endTime: this.trip.endTime,
      // endLocation: {
      //   coordinates: `${this.trip.endLocation.coordinates.lat},${this.trip.endLocation.coordinates.lng}`,
      //   description: this.trip.endLocation.description
      // },
      distance: this.trip.distance,
      duration: this.trip.duration,
      transport: this.trip.transport
    });
  }

  setModel() {
    const formModel = this.form.value;
    this.trip.startTime = new Date(formModel.startTime);
    this.trip.startLocation = new Waypoint({
      description: formModel.startLocation.description
    });
    this.trip.endTime = new Date(formModel.endTime);
    this.trip.endLocation = new Waypoint({
      description: formModel.startLocation.description
    });
    this.trip.distance = formModel.distance;
    this.trip.duration = formModel.duration;
    this.trip.transport = formModel.transport;
  }

  confirm() {
    this.setModel();
    this.modal.close(this.trip);
  }

  dismiss() {
    this.modal.dismiss();
  }

  createForm() {
    this.form = this.fb.group({
      startTime: [new Date(), Validators.required ],
      startLocation: this.fb.group({
        coordinates: ['', Validators.required ],
        description: ['', Validators.required ]
      }),
      endTime: [new Date(), Validators.required ],
      endLocation: this.fb.group({
        coordinates: ['', Validators.required ],
        description: ['', Validators.required ]
      }),
      distance: [null, Validators.required ],
      duration: [null, Validators.required ],
      transport: ['', Validators.required ],
    });
  }

}
