import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { RestResource } from './rest-resource';
import { RestResourceFactory } from './rest-resource-factory';
import { Bill, Trip } from './api-model';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  public bills: RestResource<Bill>;
  public trips: RestResource<Trip>;

  constructor(private restResourceFactory: RestResourceFactory) {
    restResourceFactory.setApiUrl(environment.apiUrl);
    this.bills = restResourceFactory.createResource('/bill');
    this.trips = restResourceFactory.createResource('/trip');
  }
}
