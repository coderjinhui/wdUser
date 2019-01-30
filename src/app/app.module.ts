import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IconDefinition } from '@ant-design/icons-angular';
import {
  MailOutline,
  UserAddOutline,
  PayCircleOutline,
  UserOutline,
  BarcodeOutline,
  DashboardOutline,
  PhoneOutline,
  HomeOutline,
  ShoppingCartOutline,
  HddOutline,
  ToolOutline,
  BranchesOutline
} from '@ant-design/icons-angular/icons';

import { SideComponent } from './components/side/side.component';
import { HeadComponent } from './components/head/head.component';
import { UserComponent } from './routes/user/user.component';
import { UserAddComponent } from './routes/user/user-add/user-add.component';
import { PayAddComponent } from './routes/user/pay-add/pay-add.component';
import { GoodsComponent } from './routes/goods/goods.component';
import { GoodAddComponent } from './routes/goods/good-add/good-add.component';
import { GoodChangeComponent } from './routes/goods/good-change/good-change.component';
import { GoodCategoryComponent } from './routes/goods/good-category/good-category.component';

import { InterceptorService } from 'app/service/http/interceptor.service';

const icons: IconDefinition[] = [
  MailOutline,
  UserAddOutline,
  PayCircleOutline,
  UserOutline,
  BarcodeOutline,
  DashboardOutline,
  PhoneOutline,
  HomeOutline,
  ShoppingCartOutline,
  HddOutline,
  ToolOutline,
  BranchesOutline
];
@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    HeadComponent,
    UserComponent,
    UserAddComponent,
    PayAddComponent,
    GoodsComponent,
    GoodAddComponent,
    GoodChangeComponent,
    GoodCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
