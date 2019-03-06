import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IBaseApi {
  getAll(): Observable<any>;
  create(...args: any[]): Observable<any>;
  delete(...args: any[]): Observable<any>;
  search(...args: any[]): Observable<any>;
  change(...args: any[]): Observable<any>;
}

export class BaseApi implements IBaseApi {
  $http: HttpClient;
  host: string;
  constructor($http: HttpClient, host: string) {
    this.$http = $http;
    this.host = host;
  }
  getAll(): Observable<any> {
    throw new Error('Method not implemented.');
  }
  create(...args: any[]): Observable<any> {
    throw new Error('Method not implemented.');
  }
  delete(...args: any[]): Observable<any> {
    throw new Error('Method not implemented.');
  }
  search(...args: any[]): Observable<any> {
    throw new Error('Method not implemented.');
  }
  change(...args: any[]): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
