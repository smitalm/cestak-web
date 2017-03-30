import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { RestResourceFactory } from './api/rest-resource-factory';
import { ApiService } from './api/api.service';

import { TripComponent } from './trip/trip.component';
import { BillComponent } from './bill/bill.component';
import { EditTripComponent } from './trip/edit-trip/edit-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    BillComponent,
    EditTripComponent
  ],
  entryComponents: [
    EditTripComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [RestResourceFactory, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
