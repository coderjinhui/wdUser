import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  menu = [
    {link: 'pay-add', icon: 'shopping-cart', title: '添加消费'},
    {link: 'user-add', icon: 'user-add', title: '修改用户'},
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
