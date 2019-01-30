import { HttpClient } from '@angular/common/http';
import { BaseApi } from './api.base';
import { Observable } from 'rxjs';
import { IGoodAdd } from 'app/model';

export class Goods implements BaseApi {
  private $http: HttpClient;
  private host: string;
  constructor($http: HttpClient, host: string) {
    this.$http = $http;
    this.host = host;
  }
  getAll(): Observable<any> {
    const url = `${this.host}/api/goods`;
    return this.$http.get(url);
  }
  create(data: IGoodAdd): Observable<any> {
    const url = `${this.host}/api/goods`;
    return this.$http.post(url, data);
  }
  delete(id: string): Observable<any> {
    const url = `${this.host}/api/goods/${id}`;
    return this.$http.delete(url);
  }
  search(keyword: string): Observable<any> {
    const url = `${this.host}/api/goods/search?keyword=${keyword}`;
    return this.$http.get(url);
  }
  change(id: string, data): Observable<any> {
    const url = `${this.host}/api/goods/${id}`;
    return this.$http.post(url, data);
  }
}
