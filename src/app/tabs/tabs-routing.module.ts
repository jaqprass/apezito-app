import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { authGuard } from '../services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'search',
        loadChildren: () =>
          import('../search/search.module').then(
            (m) => m.SearchPageModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'entregas',
        loadChildren: () =>
          import('../entregas/entregas.module').then(
            (m) => m.EntregasPageModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then(
            (m) => m.AccountPageModule
          ),
       canActivate: [authGuard],
      },
      // {
      //   path: 'pedidos/:id',
      //   loadChildren: () =>
      //     import('../pedidos/pedidos.module').then((m) => m.PedidosPageModule),
      //   canActivate: [authGuard],
      // },
      // {
      //   path: 'pedido/:id',
      //   loadChildren: () =>
      //     import('../pedido/pedido.module').then((m) => m.PedidoPageModule),
      //   canActivate: [authGuard],
      // },
      {
        path: 'mapa',
        loadChildren: () =>
          import('../mapa/mapa.module').then(
            (m) => m.MapaPageModule
          ),
        canActivate: [authGuard],
      },
    ],
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
