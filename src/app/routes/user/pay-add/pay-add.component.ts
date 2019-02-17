import { Component, OnInit, DoCheck, ViewChildren } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'app-pay-add',
  templateUrl: './pay-add.component.html',
  styleUrls: ['./pay-add.component.scss']
})
export class PayAddComponent implements OnInit, DoCheck {
  users = [];
  users_show = [];
  currentPage = 1;
  searchText = '';
  change_id = '';
  searchTimmer: any = 0;
  costList = [
    {
      name: '',
      num: '',
      cost: ''
    }
  ];
  goods = [];
  goods_show = [];
  constructor(private $http: HttpService, private message: NzMessageService) {}

  ngOnInit() {
    this.init();
  }
  ngDoCheck(): void {
    const index = this.currentPage - 1;
    this.users_show = this.users.slice(index * 10, this.currentPage * 10);
  }

  init() {
    this.getAllData();
    this.$http.goods.getAll().subscribe(data => {
      if (data.code === 0) {
        this.goods = data.data;
        this.goods_show = [...this.goods];
      }
    });
  }

  search() {
    if (this.searchText) {
      this.$http.user.search(this.searchText).subscribe(res => {
        if (res.code === 0) {
          this.users = res.data;
        }
      });
    } else {
      this.getAllData();
    }
  }

  handleSearchInput() {
    clearTimeout(this.searchTimmer);
    this.searchTimmer = setTimeout(() => {
      this.search();
    }, 500);
  }

  getAllData() {
    this.$http.user.getAll().subscribe(data => {
      if (data.code === 0) {
        this.users = data.data;
      }
    });
  }

  addCostList(id: string) {
    this.change_id = id;
  }
  // 添加用户消费记录模块
  handleOk() {
    this.costList = this.costList.filter(item => {
      const bool = item.name !== '' && item.cost !== '' && item.num !== '';
      return bool;
    });
    const tempList = [];
    for (let i = 0; i < this.costList.length; i++) {
      const temp = {
        id: '',
        num: 0,
        cost: 0
      };
      temp.id = this.goods.filter(
        item => item.name === this.costList[i].name
      )[0]._id;
      temp.cost = Number(this.costList[i].cost);
      temp.num = Number(this.costList[i].num);
      tempList.push(temp);
    }
  }
  handleCancel() {
    this.change_id = '';
  }
  autoCompleteFilter(event) {
    console.log(this.costList);
    this.goods_show = this.goods.filter(item => {
      return new RegExp(event).test(item.name);
    });
  }
  addOneCost() {
    // 添加一个消费记录
    const cost = {
      name: '',
      num: '',
      cost: ''
    };
    this.costList.push(cost);
    this.autoCompleteFilter('');
  }

  deleteOneCost(index: number) {
    if (this.costList.length <= 1) {
      return false;
    }
    this.costList.splice(index, 1);
  }
}
