import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const idToken = localStorage.getItem("token");
        if (idToken) {
            const cloned = req.clone({
                setHeaders: { Authorization: 'Bearer '+idToken }
            });
            console.log(cloned)
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}