import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { mergeMap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private message: NzMessageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      mergeMap((event: any) => {
        // 请求成功返回响应 https://blog.csdn.net/shengandshu/article/details/82754875
        return Observable.create(observer => observer.next(event));
      }),
      catchError((res: HttpResponse<any>) => {
        // 请求失败处理
        console.log('网络请求发生错误', res);
        this.message.create('error', '网络请求发生错误');
        return 'Observable.create(res)';
      })
    );
  }
}
