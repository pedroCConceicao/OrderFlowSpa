import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pedido } from './models/Pedido.model';
import { Observable } from 'rxjs';
import { LoginMessage } from './models/dto/LoginMessage.model';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {}

    icons!: any[];

    selectedIcon: any;

    apiUrl = 'http://localhost:8080/login';

    login(body: any): Observable<LoginMessage> {
        return this.http.post<LoginMessage>(this.apiUrl, body).pipe(
            map((res: LoginMessage) => {
                console.log(res);
                return res;
            })
        );
    }    
}
