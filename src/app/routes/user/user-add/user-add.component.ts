import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('telephone') telephone: ElementRef;
  phoneNum: number;
  chooseAreaIndex: number;
  userName: string;
  userGender: number;

  constructor() {}

  ngOnInit() {}

  validatePhone(str: string): boolean {
    const reg = /^([0-9])+$/;
    return reg.test(str);
  }
}
