import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { RestResource } from './rest-resource';
import { RestResourceFactory } from './rest-resource-factory';
import { Bill, Trip } from './api-model';

// const API_URL = 'http://cestak-api.herokuapp.com/api';
const API_URL = 'http://localhost:8080/api';

@Injectable()
export class ApiService {
  public bills: RestResource<Bill>;
  public trips: RestResource<Trip>;

  constructor(private restResourceFactory: RestResourceFactory) {
    restResourceFactory.setApiUrl(API_URL);
    this.bills = restResourceFactory.createResource('/bill');
    this.trips = restResourceFactory.createResource('/trip');
  }
}
