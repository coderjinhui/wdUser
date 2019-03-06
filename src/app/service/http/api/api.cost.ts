import { BaseApi } from './api.base';
import { Observable } from 'rxjs';

export interface ICostCreate {
  cost: Number;
  id: string;
  num: Number;
}

export class Cost extends BaseApi {
  getAll(): Observable<any> {
    const url = `${this.host}/api/cost`;
    return this.$http.get(url);
  }
  create(uid: string, goods: ICostCreate[]): Observable<any> {
    const url = `${this.host}/api/cost`;
    return this.$http.post(url, {
      uid,
      goods
    });
  }
  delete(...args: any[]): Observable<any> {
    const url = 'http://www.baidu.com';
    return this.$http.get(url);
  }
  search(...args: any[]): Observable<any> {
    const url = 'http://www.baidu.com';
    return this.$http.get(url);
  }
  change(...args: any[]): Observable<any> {
    const url = 'http://www.baidu.com';
    return this.$http.get(url);
  }
}
