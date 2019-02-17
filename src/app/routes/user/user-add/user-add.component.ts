import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';
import { IUser } from '../../../model';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
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
  @ViewChild('telephone') telephone: ElementRef; // 用来做验证

  userName: string;
  userGender: string;
  phoneNum: string;
  chooseAreaIndex: number;
  userAddr: string;

  constructor(private $http: HttpService, private message: NzMessageService) {}

  ngOnInit() {}

  // validatePhone(str: string): boolean {
  //   const reg = /^([0-9])+$/;
  //   return reg.test(str);
  // }
  clearAll() {
    this.userName = '';
    this.userGender = '';
    this.phoneNum = '';
    this.chooseAreaIndex = -1;
    this.userAddr = '';
  }
  create() {
    const user: IUser = {
      name: this.userName,
      gender: this.userGender,
      phone: this.phoneNum,
      area: this.areas[this.chooseAreaIndex],
      addr: this.userAddr
    };
    this.$http.user.create(user).subscribe(res => {
      if (res.code === 0) {
        this.clearAll();
        this.message.info('用户添加成功');
      }
    });
  }
}
