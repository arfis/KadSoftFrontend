import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class InterceptorService implements HttpInterceptor {

  private accessToken;

  constructor() {
    this.accessToken = localStorage.getItem('accessToken');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.accessToken = localStorage.getItem('accessToken');
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.accessToken}`
      }
    });

    return next.handle(req);
  }
}
