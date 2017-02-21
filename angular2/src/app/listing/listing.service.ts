import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListingService {
    constructor(private http: Http) {
        //
    }

    // Get All users
    getUsers() {
        return this.http.get('/users')
        .map(res => res.json());
    }

    // Delete an user
    removeUser (id: number) {
        return this.http.delete('/user/' + id); /*// ...using put request
                         .map(res => res.json()) // ...and calling .json() on the response to return data
                         .catch(error => error.json().error || 'Server error');*/ // ...errors if any
    }

    // Show an user
    showUser (id: number) {
        return this.http.get('/user/' + id) // ...using put request
                         .map(res => res.json()); /* // ...and calling .json() on the response to return data
                         .catch(error => error.json().error || 'Server error');*/ // ...errors if any
    }
}
