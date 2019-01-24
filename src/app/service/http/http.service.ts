import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Category } from './api/api.category';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private host = environment.api;
  constructor(private $http: HttpClient) { }
  // 商品分类api
  public category = new Category(this.$http, this.host);
}
