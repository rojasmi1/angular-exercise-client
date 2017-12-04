import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';
import { User } from './user';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserByUsername(username: string): Observable<User> {
    const getUserURL = `${environment.baseAPIUrl}/users/${username}/details`;
    const userObservable = this.http.get<User>(getUserURL);
    return userObservable;
  }

}
