import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';
import { NzMessageService } from 'ng-zorro-antd';
import { IUser } from '../../../model';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.scss']
})
export class UserChangeComponent implements OnInit, DoCheck {
  users = [];
  users_show = [];
  currentPage = 1;
  searchText = '';
  change_id = '';
  current_obj: any = {};
  change_obj: any = {};
  areas = [
    '黄浦区',
    '静安区',
    '徐汇区',
    '浦东新区',
    '虹口区',
    '长宁区',
    '闵行区',
    '宝山区',
    '松江区',
    '嘉定区',
    '杨浦区',
    '普陀区',
    '奉贤区',
    '金山区',
    '青浦区',
    '崇明区'
  ];
  searchTimmer: any = 0;
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

  deleteOne(id: string) {
    this.$http.user.delete(id).subscribe(res => {
      if (res.code === 0) {
        this.message.create('info', '用户删除成功');
        this.getAllData();
      }
    });
  }

  handleChange(id) {
    this.change_id = id;
    const obj = this.users.filter(item => item['_id'] === this.change_id);
    this.current_obj = obj[0];
    this.change_obj.name = this.current_obj.name;
    this.change_obj.phone = this.current_obj.phone;
    this.change_obj.gender = this.current_obj.gender;
    this.change_obj.area = this.current_obj.area;
    this.change_obj.addr = this.current_obj.addr;
  }

  handleOk() {
    const isDifferent = this.checkDiff(this.current_obj, this.change_obj);
    if (isDifferent) {
      this.$http.user.change(this.change_id, this.change_obj).subscribe(res => {
        if (res.code === 0) {
          this.message.info('用户修改成功');
          this.change_id = '';
          this.getAllData();
        }
      });
    }
  }

  handleCancel() {
    this.change_id = '';
  }
  checkDiff(current, change) {
    let key = Object.keys(current);
    key = key.filter(item => {
      const bool = item !== '__v' && item !== '_id';
      return bool;
    });
    for (let i = 0; i < key.length; i++) {
      if (current[key[i]] !== change[key[i]]) {
        return true;
      }
    }
    return false;
  }
}
