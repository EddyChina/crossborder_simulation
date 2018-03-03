import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {MaterialsModule} from './materials/materials.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CrossborderRoutingModule} from './routing/cb-global-routing.module';
import {ExchangeConfirmRemittantComponent} from './exchange/exchange-confirm-remittant/exchange-confirm-remittant.component';
import {ExchangeApplyComponent} from './exchange/exchange-apply/exchange-apply.component';
import {ExchangePaymentInfoComponent} from './exchange/exchange-payment-info/exchange-payment-info.component';
import {CbRoutingService} from './routing/cb-routing.service';
import {CbBaseComponent} from './cb-base/cb-base.component';
import {CbExchangeService} from './exchange/cb-exchange.service';
import {CbExchangeFileBatchQueryComponent} from './exchange/cb-exchange-file-batch-query/cb-exchange-file-batch-query.component';
import {CbExchangeRegisterEnterpriseComponent} from './exchange/cb-exchange-register-enterprise/cb-exchange-register-enterprise.component';
import {CbExchangeQueryEnterpriseComponent} from './exchange/cb-exchange-query-enterprise/cb-exchange-query-enterprise.component';
import {CbBaseExchangeComponent} from './cb-base/cb-base-exchange.component';
import {CbWelcomeComponent} from './cb-welcome/cb-welcome.component';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {BootstrapDemoComponent} from './bootstrap-demo/bootstrap-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeConfirmRemittantComponent,
    ExchangeApplyComponent,
    ExchangePaymentInfoComponent,
    CbBaseComponent,
    CbExchangeFileBatchQueryComponent,
    CbExchangeRegisterEnterpriseComponent,
    CbExchangeQueryEnterpriseComponent,
    CbBaseExchangeComponent,
    CbWelcomeComponent,
    BootstrapDemoComponent,
  ],
  imports: [
    CrossborderRoutingModule,
    BrowserModule,
    MaterialsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
  ],
  providers: [
    CbRoutingService,
    CbExchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
