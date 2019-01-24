import { HttpClient } from '@angular/common/http';
import { BaseApi } from './api.base';
import { Observable } from 'rxjs';

export class Goods implements BaseApi {
  private $http: HttpClient;
  private host: string;
  constructor($http: HttpClient, host: string) {
    this.$http = $http;
    this.host = host;
  }
  getAll(): Observable<any> {
    const url = `${this.host}`;
    return this.$http.get(url);
  }
  create(): Observable<any> {
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
