import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Pedido } from '../service/models/Pedido.model';
import { FormsModule } from '@angular/forms';
import { PedidoService } from '../service/pedido.service';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-pedido',
    imports: [ TableModule, InputTextModule, FloatLabelModule, FormsModule, ToolbarModule, ButtonModule ],
    providers: [ PedidoService ],
    template: `
    <p-toolbar [style]="{ 'padding': '1rem 1rem 1rem 1.5rem', 'margin-bottom': '1rem' }">
        <ng-template #start>
            <div class="flex items-center gap-4">
                <p-button icon="pi pi-search" label="Pesquisar" (onClick)="buscarPedidos()" />
                <p-button icon="pi pi-trash" label="Limpar" (onClick)="limpar()" />
                <p-button icon="pi pi-plus" label="Cadastrar" />
            </div>
        </ng-template>
    </p-toolbar>

    <div class="card">
        <div class="flex flex-wrap justify-left items-end gap-4">
            <p-floatlabel variant="on">
                <input pInputText id="filtroCodigoPedido" [(ngModel)]="filtroCodigoPedido" autocomplete="off" />
                <label for="filtroCodigoPedido">Código</label>
            </p-floatlabel>
            <p-floatlabel variant="on">
                <input pInputText id="filtroCodigoProduto" [(ngModel)]="filtroCodigoProduto" autocomplete="off" />
                <label for="filtroCodigoProduto">Produto</label>
            </p-floatlabel>
        </div>

        <p-table [value]="pedidos" [tableStyle]="{ 'min-width': '50rem', 'margin-top': '2rem' }">
            <ng-template #header>
                <tr>
                    <th>Código</th>
                    <th>Cliente</th>
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
    </div>
    `
})
export class PedidoComponent implements OnInit {
    pedidos: Pedido[] = [];

    filtroCodigoPedido: number | undefined;
    filtroCodigoProduto: number | undefined;

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

    limpar() {
        this.filtroCodigoPedido = undefined;
        this.filtroCodigoProduto = undefined
        this.pedidos = [];
    }

}
