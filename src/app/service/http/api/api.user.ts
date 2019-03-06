import { HttpClient } from '@angular/common/http';
import { BaseApi } from './api.base';
import { Observable } from 'rxjs';
import { IUser } from 'app/model';

export class User extends BaseApi {
  // private $http: HttpClient;
  // private host: string;
  // constructor($http: HttpClient, host: string) {
  //   this.$http = $http;
  //   this.host = host;
  // }
  getAll(): Observable<any> {
    const url = `${this.host}/api/user`;
    return this.$http.get(url);
  }
  create(user: IUser): Observable<any> {
    const url = `${this.host}/api/user`;
    return this.$http.post(url, user);
  }
  delete(id: string): Observable<any> {
    const url = `${this.host}/api/user/${id}`;
    return this.$http.delete(url);
  }
  search(phone): Observable<any> {
    const url = `${this.host}/api/user/search?phone=${phone}`;
    return this.$http.get(url);
  }
  change(id: string, user: IUser): Observable<any> {
    const url = `${this.host}/api/user/${id}`;
    return this.$http.post(url, user);
  }
}
