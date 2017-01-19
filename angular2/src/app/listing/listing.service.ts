import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListingService {
    constructor(private http: Http) {
        console.log('PostsService init ...');
    }

    getUsers() {
        return this.http.get('/users')
        .map(res => res.json());
    }
}
