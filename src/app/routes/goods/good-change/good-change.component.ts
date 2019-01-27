import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';
@Component({
  selector: 'app-good-change',
  templateUrl: './good-change.component.html',
  styleUrls: ['./good-change.component.scss']
})
export class GoodChangeComponent implements OnInit, DoCheck {
  goods = [
    {
      name: '东台香米',
      category: { name: '大米', _id: '123' },
      price: { inValue: 3.2, outValue: 4.5 }
    }
  ];
  goods_show = [];
  currentPage = 1;
  searchText = '';

  constructor(private $http: HttpService) {}

  ngOnInit() {
    this.init();
  }
  ngDoCheck(): void {
    const index = this.currentPage - 1;
    this.goods_show = this.goods.slice(index * 10, this.currentPage * 10);
  }
  init() {
    this.getAllData();
  }
  getAllData() {
    this.$http.goods.getAll().subscribe(data => {
      if (data.code === 0) {
        this.goods = data.data;
      }
    });
  }
  search() {
    if (!this.searchText) {
      return false;
    }
    this.$http.goods.search(this.searchText).subscribe(data => {
      if (data.code === 0) {
        this.goods = data.data;
      }
    });
  }
  deleteOne(id) {
    this.$http.goods.delete(id).subscribe(data => {
      this.getAllData();
    });
  }
}
