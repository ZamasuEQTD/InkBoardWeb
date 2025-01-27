import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthService } from "../../auth/services/auth-service";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    auth = inject(AuthService);

    constructor(
     ) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.auth.accessToken() === null){
          return next.handle(request);
        }

        const clonedRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${this.auth.accessToken()}`
          }
        });
        return next.handle(clonedRequest);
    }
}
