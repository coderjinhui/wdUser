import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IconDefinition } from '@ant-design/icons-angular';
import {
  MailOutline, UserAddOutline, PayCircleOutline, UserOutline,
  BarcodeOutline, DashboardOutline, PhoneOutline, HomeOutline
} from '@ant-design/icons-angular/icons';
import { SideComponent } from './components/side/side.component';
import { HeadComponent } from './components/head/head.component';
import { UserComponent } from './routes/user/user.component';
import { UserAddComponent } from './routes/user/user-add/user-add.component';
import { PayAddComponent } from './routes/user/pay-add/pay-add.component';
import { GoodsComponent } from './routes/goods/goods.component';


const icons: IconDefinition[] = [
  MailOutline, UserAddOutline, PayCircleOutline,
  UserOutline, BarcodeOutline, DashboardOutline,
  PhoneOutline, HomeOutline,
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
    { provide: NZ_ICONS, useValue: icons}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
