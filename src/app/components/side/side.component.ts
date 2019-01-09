import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  menu = [
    {link: '/index', icon: 'user', title: '用户管理'},
    {link: '/goods', icon: 'barcode', title: '商品管理'},
    {link: '/goods', icon: 'dashboard', title: '数据分析'},
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
