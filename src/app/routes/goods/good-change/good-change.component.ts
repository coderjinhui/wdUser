import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-good-change',
  templateUrl: './good-change.component.html',
  styleUrls: ['./good-change.component.scss']
})
export class GoodChangeComponent implements OnInit, DoCheck {

  goods = [
    {name: '东台香米', category: '大米', price: {inValue: 3.2, outValue: 4.5}},
    {name: '酱油', category: '调味品', price: {inValue: 3, outValue: 5}},
    {name: '油', category: '调味品', price: {inValue: 3.2, outValue: 4.5}},
    {name: '盐', category: '调味品', price: {inValue: 3.2, outValue: 4.5}},
    {name: '崇明香米', category: '大米', price: {inValue: 3.2, outValue: 4.5}},
    {name: '水饺', category: '冷冻食品', price: {inValue: 3.2, outValue: 4.5}},
    {name: '汤圆', category: '冷冻食品', price: {inValue: 3.2, outValue: 4.5}},
    {name: '黄豆', category: '杂粮', price: {inValue: 3.2, outValue: 4.5}},
    {name: '绿豆', category: '杂粮', price: {inValue: 3.2, outValue: 4.5}},
    {name: '年糕', category: '糕点', price: {inValue: 3.2, outValue: 4.5}},
    {name: '崇明糕', category: '糕点', price: {inValue: 3.2, outValue: 4.5}},
  ];
  goods_show = [];
  currentPage = 1;
  constructor() { }

  ngOnInit() {
  }
  ngDoCheck(): void {
    const index = this.currentPage - 1;
    this.goods_show = this.goods.slice(index * 10, this.currentPage * 10);
  }

}
