import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { RestResource } from './rest-resource';

@Injectable()
export class RestResourceFactory {
  private apiUrl = '';

  constructor(private http: Http) {

  }

  setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  createResource<T>(path: string): RestResource<T> {
    return {
      query: (params?) => {
        return this.http
          .get(this.apiUrl + path, {
            search: this.buildQueryParams(params)
          })
          .map(this.extractData);
      },
      get: (id) => {
        return this.http
          .get(`${this.apiUrl}${path}/${id}`)
          .map(this.extractData);
      },
      update: (entity) => {
        return this.http
          .put(`${this.apiUrl}${path}`, entity)
          .map(this.extractData);
      },
      create: (entity) => {
        return this.http
          .post(`${this.apiUrl}${path}`, entity)
          .map(this.extractData);
      },
      remove: (entity) => {
        return this.http
          .delete(`${this.apiUrl}${path}`, {
            body: entity
          })
          .map(this.extractData);
      }
    };
  }

  private buildQueryParams(query: any): URLSearchParams {
    if (query == null) {
      return null;
    }
    const params = new URLSearchParams();
    query.forEach((value, key) => {
      params.set(key, value);
    });
    return params;
  }

  private extractData(res: any) {
    return res.json() || {};
  }
}

