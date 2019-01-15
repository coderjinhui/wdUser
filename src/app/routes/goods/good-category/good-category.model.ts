import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable()
export class GoodCategoryModel {
  private api: string;
  constructor(private $http: HttpClient) {
    this.api = environment.api;
  }
  getAllCategory() {
    const url = `${this.api}/api/category`;
    return this.$http.get(url);
  }
  createCategoty(name) {
    const url = `${this.api}/api/category`;
    return this.$http.post(url, {
      name: name
    });
  }
  deleteCategory(id) {
    const url = `${this.api}/api/category/${id}`;
    return this.$http.delete(url);
  }
  searchCategory(keyword) {
    const url = `${this.api}/api/category/search?keyword=${keyword}`;
    return this.$http.get(url);
  }
  changeCategory(id, name) {}
}
