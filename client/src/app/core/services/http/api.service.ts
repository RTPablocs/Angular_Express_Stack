import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private httpClient: HttpClient) { }

    get(path: string): Observable<any> {
        return this.httpClient.get(`${environment.url}${path}`)
            .pipe(catchError(err => throwError(err.error)))

    }

    post(path: string, postBody: Object): Observable<any> {
        return this.httpClient.post(`${environment.url}${path}`, postBody)
            .pipe(catchError(err => throwError(err.error)))
    }

    patch(path:string, patchBody: Object): Observable<any> {
        return this.httpClient.patch(`${environment.url}${path}`, patchBody)
            .pipe(catchError(err => throwError(err.error)))
    }

    delete(path: string) {
        return this.httpClient.delete(`${environment.url}${path}`)
            .pipe(catchError(err => throwError(err.error)))
    }
}
