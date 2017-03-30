import { Observable } from 'rxjs/Rx';

export interface RestResource<T> {
  query: (p?: any) => Observable<T[]>;
  get: (id: string) => Observable<T>;
  update: (item: T) => Observable<T>;
  create: (item: T) => Observable<T>;
  remove: (item: T) => Observable<boolean>;
}

