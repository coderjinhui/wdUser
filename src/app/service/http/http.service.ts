import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Category } from './api/api.category';
import { Goods } from './api/api.good';
import { User } from './api/api.user';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private host = environment.api;
  constructor(private $http: HttpClient) {}
  // 商品分类api
  public category = new Category(this.$http, this.host);
  public goods = new Goods(this.$http, this.host);
  public user = new User(this.$http, this.host);
}
