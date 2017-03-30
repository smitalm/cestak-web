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
    this.resetForm();
  }

  ngOnChanges() {
    this.resetForm();
  }

  resetForm() {
    this.form.reset({
      startTime: this.trip.startTime,
      startLocation: Object.assign({
        coordinates: '',
        description: ''
      }, this.trip.startLocation || {}),
      endTime: this.trip.endTime,
      endLocation: Object.assign({
        coordinates: '',
        description: ''
      }, this.trip.endLocation || {}),
      distance: this.trip.distance,
      duration: this.trip.duration,
      transport: this.trip.transport
    });
  }

  getModel() {
    const model = Object.assign(new Trip(), this.trip);
    const formModel = this.form.value;
    model.startTime = formModel.startTime;
    model.startLocation = new Waypoint({
      coordinates: 'TODO',
      description: formModel.startLocation.description
    });
    model.endTime = formModel.endTime;
    model.endLocation = new Waypoint({
      coordinates: 'TODO',
      description: formModel.endLocation.description
    });
    model.distance = formModel.distance;
    model.duration = formModel.duration;
    model.transport = formModel.transport;
    return model;
  }

  confirm() {
    this.modal.close(this.getModel());
  }

  dismiss() {
    this.modal.dismiss();
  }

  createForm() {
    this.form = this.fb.group({
      startTime: ['', Validators.required ],
      startLocation: this.fb.group({
        coordinates: ['', Validators.required ],
        description: ['', Validators.required ]
      }),
      endTime: ['', Validators.required ],
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
