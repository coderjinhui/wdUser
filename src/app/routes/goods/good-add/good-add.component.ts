import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';
import { Category } from 'app/service/http/api/api.category';
import { Good } from 'app/model';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-good-add',
  templateUrl: './good-add.component.html',
  styleUrls: ['./good-add.component.scss']
})
export class GoodAddComponent implements OnInit {
  categories = [];
  private formData = {
    name: '',
    category: '',
    inValue: '',
    outValue: ''
  };
  constructor(private $http: HttpService, private message: NzMessageService) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.$http.category.getAll().subscribe(res => {
      if (res.code === 0) {
        this.categories = res.data;
      }
    });
  }
  handleAddGoods() {
    if (
      !this.formData.name ||
      !this.formData.category ||
      !this.formData.inValue ||
      !this.formData.outValue
    ) {
      this.message.create('info', '商品添加不能为空');
      return false;
    }
    const data = new Good(this.formData);
    console.log(data);
    this.$http.goods.create(data).subscribe(res => {
      if (res.code === 0) {
        this.formData = {
          name: '',
          category: '',
          inValue: '',
          outValue: ''
        };
        this.message.create('success', '添加商品成功', { nzDuration: 5000 });
      }
    });
  }
  handleCancelGoods() {
    this.formData.name = '';
    this.formData.category = '';
    this.formData.inValue = '';
    this.formData.outValue = '';
  }
}
