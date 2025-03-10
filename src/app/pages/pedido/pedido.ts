import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Pedido } from '../service/models/Pedido.model';
import { PedidoService } from '../service/pedido.service';

@Component({
    selector: 'app-pedido',
    standalone: true,
    imports: [ TableModule ],
    providers: [ PedidoService ],
    template: ` 
    <div class="card">
        <div class="font-semibold text-xl mb-4">Página de Pedidos</div>
        <p>This is just a test.</p>
    </div>
    <p-table [value]="pedidos" [tableStyle]="{ 'min-width': '50rem' }">
        <ng-template #header>
            <tr>
                <th>Código</th>
                <th>Clinte</th>
                <th>Valor</th>
                <th>Quantidade</th>
            </tr>
        </ng-template>
        <ng-template #body let-pedido>
            <tr>
                <td>{{ pedido.codigoPedido }}</td>
                <td>{{ pedido.codigoCliente }}</td>
                <td>{{ pedido.valorTotal }}</td>
                <td>{{ pedido.quantidadeProduto }}</td>
            </tr>
        </ng-template>
    </p-table>
    `
})
export class PedidoComponent implements OnInit {
    pedidos: Pedido[] = [];

    constructor(private pedidoService: PedidoService) { }

    ngOnInit() {
        this.buscarPedidos();
        console.log("pedidos", this.pedidos);
    }

    buscarPedidos() {
        this.pedidoService.getPedidos().subscribe((data: Pedido[]) => {
            console.log("data", data);
            this.pedidos = data;
        });
    }


}
