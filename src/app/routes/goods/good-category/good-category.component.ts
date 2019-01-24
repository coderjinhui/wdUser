import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from 'app/service/http/http.service';


@Component({
  selector: 'app-good-category',
  templateUrl: './good-category.component.html',
  styleUrls: ['./good-category.component.scss'],
})
export class GoodCategoryComponent implements OnInit, DoCheck {

  category = [];
  category_show = [];
  currentPage = 1;
  addCategory: String = '';
  keyword: String = '';

  constructor(public helper: HttpService) {
    this.getAllCategory();
  }

  ngOnInit() {
  }
  ngDoCheck(): void {
    const index = this.currentPage - 1;
    this.category_show = this.category.slice(index * 10, this.currentPage * 10);
  }
  getAllCategory() {
    this.helper.category.getAll().subscribe(data => {
      if (data['code'] === 0) {
        this.category = data['data'];
        console.log(this.category);
      }
    });
  }
  createCategory() {
    if (this.addCategory === '') {
      return false;
    }
    this.helper.category.create(this.addCategory).subscribe(data => {
      this.getAllCategory();
      this.addCategory = '';
    });
  }
  deleteCategory(id) {
    this.helper.category.delete(id).subscribe(data => {
      if (data['code'] === 0) {
        this.getAllCategory();
      }
    });
  }
  searchCategory() {
    if (this.keyword === '') {
      this.getAllCategory();
      return false;
    }
    this.helper.category.search(this.keyword).subscribe(data => {
      if (data['code'] === 0) {
        this.category = data['data'];
      }
    });
  }
  changeCategory() {}

}
