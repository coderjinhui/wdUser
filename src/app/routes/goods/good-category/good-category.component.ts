import { Component, OnInit, DoCheck } from '@angular/core';
import { GoodCategoryModel } from './good-category.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-good-category',
  templateUrl: './good-category.component.html',
  styleUrls: ['./good-category.component.scss'],
  providers: [GoodCategoryModel]
})
export class GoodCategoryComponent implements OnInit, DoCheck {

  category = [];
  category_show = [];
  currentPage = 1;
  addCategory: String = '';
  keyword: String = '';

  constructor(public helper: GoodCategoryModel) {
    this.getAllCategory();
  }

  ngOnInit() {
  }
  ngDoCheck(): void {
    const index = this.currentPage - 1;
    this.category_show = this.category.slice(index * 10, this.currentPage * 10);
  }
  getAllCategory() {
    this.helper.getAllCategory().subscribe(data => {
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
    this.helper.createCategoty(this.addCategory).subscribe(data => {
      this.getAllCategory();
      this.addCategory = '';
    });
  }
  deleteCategory(id) {
    this.helper.deleteCategory(id).subscribe(data => {
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
    this.helper.searchCategory(this.keyword).subscribe(data => {
      if (data['code'] === 0) {
        this.category = data['data'];
      }
    });
  }
  changeCategory() {}

}
