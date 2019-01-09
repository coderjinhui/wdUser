import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {
  menu = [
    {link: 'good-add', icon: 'hdd', title: '添加商品'},
    {link: 'good-change', icon: 'tool', title: '修改商品'},
    {link: 'good-category', icon: 'tool', title: '添加类目'},
  ];
  selected = 0;
  constructor(router: Router) {
    router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        for (let i = 0; i < this.menu.length; i++) {
          const reg = new RegExp(this.menu[i].link);
          if (reg.test(e.url)) {
            this.selected = i;
            break;
          }
        }
      }
    });
  }

  ngOnInit() {
  }

}
