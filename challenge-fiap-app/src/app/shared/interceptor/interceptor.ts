import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import { IonLoaderService } from '../loader/loader.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private ionLoaderService: IonLoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     this.ionLoaderService.simpleLoader();

    return next.handle(request).pipe(
       finalize(() => this.ionLoaderService.dismissLoader())
    );
  }
}