import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pedido } from './models/Pedido.model';
import { Observable } from 'rxjs';

@Injectable()
export class RegistroService {
    constructor(private http: HttpClient) {}

    icons!: any[];

    selectedIcon: any;

    apiUrl = 'http://localhost:8080/usuarios';

    salvar(body: any): Observable<any> {
        return this.http.post(this.apiUrl + '/registrarUsuario', body, {responseType: 'text'}).pipe(
            map((res) => {
                console.log(res);
                return res;
            })
        );
    }
}
