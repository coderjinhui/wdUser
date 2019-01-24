import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';
@Component({
  selector: 'app-pay-add',
  templateUrl: './pay-add.component.html',
  styleUrls: ['./pay-add.component.scss']
})
export class PayAddComponent implements OnInit {

  constructor(private $http: HttpService) { }

  ngOnInit() {
  }

 

}
