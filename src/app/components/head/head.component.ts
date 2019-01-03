import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor() { }
  @Input('page') page: string;
  ngOnInit() {
  }

}
