import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {CbRoutingService} from './cb-routing.service';

@NgModule({
  imports: [
    RouterModule.forRoot(CbRoutingService.globalRoutes),
    RouterModule.forChild(CbRoutingService.exchangeRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class CrossborderRoutingModule { }
