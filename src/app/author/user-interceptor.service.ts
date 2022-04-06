import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';
import { AuthorService } from './author.service';

@Injectable()
export class UserInterceptor implements HttpInterceptor {
  constructor(private authSer: AuthorService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authSer.user.pipe(
      take(1),
      exhaustMap(userRes => {


        if(!userRes){
            return next.handle(req)
        }
          
        const modified = req.clone({
            params: new HttpParams().set('auth', userRes.token)});
            
        return next.handle(modified);
         
      })
    );
  }
}
