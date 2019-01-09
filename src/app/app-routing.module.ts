import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './routes/user/user.component';
import { UserAddComponent } from './routes/user/user-add/user-add.component';
import { PayAddComponent } from './routes/user/pay-add/pay-add.component';
import { GoodsComponent } from './routes/goods/goods.component';
import { GoodAddComponent } from './routes/goods/good-add/good-add.component';
import { GoodChangeComponent } from './routes/goods/good-change/good-change.component';
import { GoodCategoryComponent } from './routes/goods/good-category/good-category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'pay-add',
        pathMatch: 'full'
      },
      {
        path: 'user-add',
        component: UserAddComponent
      },
      {
        path: 'pay-add',
        component: PayAddComponent
      }
    ]
  },
  {
    path: 'goods',
    component: GoodsComponent,
    children: [
      {
        path: '',
        redirectTo: 'good-add',
        pathMatch: 'full'
      },
      {
        path: 'good-add',
        component: GoodAddComponent
      },
      {
        path: 'good-change',
        component: GoodChangeComponent
      },
      {
        path: 'good-category',
        component: GoodCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
