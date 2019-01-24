import { Observable } from 'rxjs';

export interface BaseApi {
  getAll(): Observable<any>;
  create(...args: any[]): Observable<any>;
  delete(...args: any[]): Observable<any>;
  search(...args: any[]): Observable<any>;
  change(...args: any[]): Observable<any>;
}
