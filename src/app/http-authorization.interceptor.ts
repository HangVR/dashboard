import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap, take } from 'rxjs/internal/operators';

@Injectable()
export class HttpAuthorizationInterceptor implements HttpInterceptor {
  constructor(private fireAuth: AngularFireAuth) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Preparing token');
    return this.fireAuth.idToken.pipe(
      take(1),
      switchMap((token) => {
        console.log('Token ready');
        const authHeader = `Bearer ${token}`;
        const modified = request.clone({
          setHeaders: { Authorization: authHeader },
        });
        return next.handle(modified);
      })
    );
  }
}
