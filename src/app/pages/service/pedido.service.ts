import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pedido } from './models/Pedido.model';

@Injectable()
export class PedidoService {
    constructor(private http: HttpClient) {}

    icons!: any[];

    selectedIcon: any;

    apiUrl = 'http://localhost:8080/pedidos';

    getPedidos() {
        return this.http.get<Pedido[]>(this.apiUrl + '/buscarPedidos');
    }
}
