import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';


@Component({
  selector: 'app-good-add',
  templateUrl: './good-add.component.html',
  styleUrls: ['./good-add.component.scss']
})
export class GoodAddComponent implements OnInit {

  constructor(private $http: HttpService) {
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.$http.category.getAll().subscribe(data => {
      console.log('get all category data', data);
    })
  }

}
