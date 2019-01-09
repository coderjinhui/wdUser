import { HttpClient } from '@angular/common/http';
export class GoodCategoryModel {
  constructor(private $http: HttpClient) {}
  getGoodsCategory() {
    return this.$http.get('');
  }
}
