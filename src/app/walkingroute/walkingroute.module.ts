import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkingroutePageRoutingModule } from './walkingroute-routing.module';

import { WalkingroutePage } from './walkingroute.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkingroutePageRoutingModule
  ],
  declarations: [WalkingroutePage]
})
export class WalkingroutePageModule {}
