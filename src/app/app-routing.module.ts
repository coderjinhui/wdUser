import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './routes/user/user.component';
import { UserAddComponent } from './routes/user/user-add/user-add.component';
import { PayAddComponent } from './routes/user/pay-add/pay-add.component';
import { GoodsComponent } from './routes/goods/goods.component';

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
    component: GoodsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
