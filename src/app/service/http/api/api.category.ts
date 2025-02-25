import { HttpClient } from '@angular/common/http';
import { BaseApi } from './api.base';
import { Observable } from 'rxjs';

// 商品分类api
export class Category extends BaseApi {
  getAll(): Observable<any> {
    const url = `${this.host}/api/category`;
    return this.$http.get(url);
  }
  create(name: string): Observable<any> {
    const url = `${this.host}/api/category`;
    return this.$http.post(url, {
      name: name
    });
  }
  delete(id: string): Observable<any> {
    const url = `${this.host}/api/category/${id}`;
    return this.$http.delete(url);
  }
  search(keyword: string): Observable<any> {
    const url = `${this.host}/api/category/search?keyword=${keyword}`;
    return this.$http.get(url);
  }
  change(id: string, name: string): Observable<any> {
    const url = `${this.host}/api/category/${id}`;
    return this.$http.post(url, {
      name: name
    });
  }
}
