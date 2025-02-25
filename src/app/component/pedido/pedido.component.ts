import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../service/pedido.service';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Pedido } from '../../model/Pedido.model';

@Component({
  selector: 'app-pedido',
  imports: [FormsModule, TableModule, ButtonModule, InputTextModule],
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.scss'
})
export class PedidoComponent implements OnInit {

  pedidos: Pedido[] = [];
  filters = {
    codigoPedido: null,
    dataPedido: null,
    codigoStatus: null,
    codigoProduto: null,
    codigoCliente: null
  }

  constructor(private pedidoService: PedidoService  ) { }

  ngOnInit(): void {
  
  }

  buscarPedidos() {
    this.pedidoService.buscarPedidos(this.filters).subscribe((response: Pedido[]) => {
      this.pedidos = response;
    }, error => { console.log(error); });
  }

}
