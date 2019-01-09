import { Component, OnInit, DoCheck } from '@angular/core';
import { GoodCategoryModel } from './good-category.model';


@Component({
  selector: 'app-good-category',
  templateUrl: './good-category.component.html',
  styleUrls: ['./good-category.component.scss']
})
export class GoodCategoryComponent implements OnInit, DoCheck {

  constructor() {}
  category = [
    {name: '大米'},
    {name: '杂粮'},
    {name: '糕点'},
    {name: '冷冻食品'},
    {name: '调味品'},

    {name: '大米'},
    {name: '杂粮'},
    {name: '糕点'},
    {name: '冷冻食品'},
    {name: '调味品'},

    {name: '大米'},
    {name: '杂粮'},
    {name: '糕点'},
    {name: '冷冻食品'},
    {name: '调味品'},
  ];
  category_show = [];
  currentPage = 1;

  ngOnInit() {
  }
  ngDoCheck(): void {
    const index = this.currentPage - 1;
    this.category_show = this.category.slice(index * 10, this.currentPage * 10);
  }

}
