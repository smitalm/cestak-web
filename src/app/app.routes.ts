import { Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { TripComponent } from './trip/trip.component';

export const appRoutes: Routes = [
  { path: '', component: BillComponent },
  { path: 'bill', component: BillComponent },
  { path: 'trip', component: TripComponent }
];
