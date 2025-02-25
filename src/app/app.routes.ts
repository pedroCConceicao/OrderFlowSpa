import { Routes } from '@angular/router';
import { PedidoComponent } from './component/pedido/pedido.component';

export const routes: Routes = [
    { path: '', redirectTo: 'pedido', pathMatch: 'full' },
    { path: 'pedido', component: PedidoComponent }
];
