import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class HoursService {

    constructor(private api: ApiService) {
    }

    registerHour(data: any): Observable<any> {
        return this.api.post('hours/new', data)
    }

    deleteHour(id: any): Observable<any> {
        return this.api.delete(`hours/delete/${id}`)
    }

}
