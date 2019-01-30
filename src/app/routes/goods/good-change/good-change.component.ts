import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';
import { Good } from '../../../model';
import { NzMessageService } from 'ng-zorro-antd';
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
  change_id = '';
  categories = [];
  change_obj = {
    name: '',
    category: '',
    inValue: null,
    outValue: null
  };
  current_obj: any;

  constructor(private $http: HttpService, private message: NzMessageService) {}

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
    this.$http.category.getAll().subscribe(data => {
      if (data.code === 0) {
        this.categories = data.data;
      }
    });
  }
  search() {
    if (!this.searchText) {
      this.$http.goods.search('all').subscribe(data => {
        if (data.code === 0) {
          this.goods = data.data;
        }
      });
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
  // 修改商品逻辑
  handleChange(id) {
    this.change_id = id;
    const obj = this.goods.filter(item => item['_id'] === this.change_id);
    this.current_obj = obj[0];
    this.change_obj.name = this.current_obj.name;
    this.change_obj.category = this.current_obj.category._id;
    this.change_obj.inValue = this.current_obj.price.inValue;
    this.change_obj.outValue = this.current_obj.price.outValue;
  }
  handleOk() {
    const isDifferent = this.checkDiff(this.current_obj, this.change_obj);
    console.log(isDifferent);
    if (!isDifferent) {
      this.message.create('info', '没有修改商品的任何内容');
      return false;
    }
    const data = new Good(this.change_obj);
    this.$http.goods.change(this.change_id, data).subscribe(res => {
      if (res.code === 0) {
        this.getAllData();
        this.change_id = '';
      } else {
        this.message.create('error', '商品信息修改失败');
      }
    });
  }
  handleCancel() {
    this.change_id = '';
  }
  checkDiff(current, change) {
    if (
      change.name === current.name &&
      change.category.toString() === current.category._id.toString() &&
      change.inValue === current.price.inValue &&
      change.outValue === current.price.outValue
    ) {
      return false;
    }
    return true;
  }
}
