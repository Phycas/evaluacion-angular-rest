import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Signed } from './dtos/signed';
import { User } from './dtos/user';

@Injectable({
  providedIn: 'root'
})
export class SignedserviceService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Signed[]> {
    console.log('SignedService: getAll');
    return this.http.get<Signed[]>('http://localhost:8090/firmas/all');
  }

  public findByUser(user: User): Observable<Signed> {
    return this.http.post<Signed>('http://localhost:8090/firma/buscar', user);
  }

  public findByUsername(username: string): Observable<Signed> {
    return this.http.get<Signed>('http://localhost:8090/buscar/' + username);
  }

}
