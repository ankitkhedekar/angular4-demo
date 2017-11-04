import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpEvent } from '@angular/common/http';

@Injectable()
export class DataInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const secureReq = req.clone({ url: req.url.replace('http://', 'https://') });
        console.log('updated', secureReq.url);
        return next.handle(secureReq);
    }
}
