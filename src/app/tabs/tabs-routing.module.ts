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
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
        canActivate: [authGuard],
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../search/search.module').then((m) => m.SearchPageModule),
        canActivate: [authGuard],
      },
      {
        path: 'walkingroute',
        loadChildren: () =>
          import('../walkingroute/walkingroute.module').then(
            (m) => m.WalkingroutePageModule
          ),
        canActivate: [authGuard],
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountPageModule),
        canActivate: [authGuard],
      },
      {
        path: 'mapa',
        loadChildren: () =>
          import('../mapa/mapa.module').then((m) => m.MapaPageModule),
        //canActivate: [authGuard],
      },
    ],
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
