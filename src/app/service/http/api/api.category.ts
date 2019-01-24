import { HttpClient } from '@angular/common/http';
import { BaseApi } from './api.base';
import { Observable } from 'rxjs';
// 商品分类api
export class Category implements BaseApi {
  $http: HttpClient;
  host: string;
  constructor($http: HttpClient, host: string) {
    this.$http = $http;
    this.host = host;
  }

  getAll(): Observable<any> {
    const url = `${this.host}/api/category`;
    return this.$http.get(url);
  }
  create(...args: any[]): Observable<any> {
    const url = `${this.host}/api/category`;
    return this.$http.post(url, {
      name: name
    });
  }
  delete(id: string): Observable<any> {
    const url = `${this.host}/api/category/${id}`;
    return this.$http.delete(url);
  }
  search(id: string): Observable<any> {
    const url = `${this.host}/api/category/${id}`;
    return this.$http.delete(url);
  }
  change(id: string, name: string): Observable<any> {
    const url = `${this.host}/api/category/${id}`;
    return this.$http.post(url, {
      name: name
    });
  }
}
