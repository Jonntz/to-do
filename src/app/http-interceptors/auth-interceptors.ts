import { AccountService } from './../account/shared/account.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private accountService: AccountService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.accountService.getAuthorizationToken();
        let request: HttpRequest<any> = req;

        if (token) {
            request = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
        }
        return next.handle(request).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log("ocorreu um erro", error.error.message);
        } else {
            console.error(
                `Código do erro: ${error.status}, ` +
                `Erro: ${JSON.stringify(error.error)}`
            );
        }
        return throwError("Ocorreu um erro, tente novamente");
    }
}