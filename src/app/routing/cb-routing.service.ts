import { Injectable } from '@angular/core';
import {Routes} from '@angular/router';
import {ExchangePaymentInfoComponent} from '../exchange/exchange-payment-info/exchange-payment-info.component';
import {ExchangeConfirmRemittantComponent} from '../exchange/exchange-confirm-remittant/exchange-confirm-remittant.component';
import {ExchangeApplyComponent} from '../exchange/exchange-apply/exchange-apply.component';
import {CbExchangeFileBatchQueryComponent} from '../exchange/cb-exchange-file-batch-query/cb-exchange-file-batch-query.component';
import {CbExchangeRegisterEnterpriseComponent} from '../exchange/cb-exchange-register-enterprise/cb-exchange-register-enterprise.component';
import {CbExchangeQueryEnterpriseComponent} from '../exchange/cb-exchange-query-enterprise/cb-exchange-query-enterprise.component';
import {CbWelcomeComponent} from '../cb-welcome/cb-welcome.component';
import {BootstrapDemoComponent} from '../bootstrap-demo/bootstrap-demo.component';

@Injectable()
export class CbRoutingService {
  static globalRoutes: Routes = [
    {
      path : '',
      component : BootstrapDemoComponent
    },
  ];

  static exchangeRoutes: Routes = [
    {
      path: 'exchange',
      children: [
        {
          path: 'receipt_file_upload',
          component: ExchangeApplyComponent
        },
        {
          path: 'confirm_remittance',
          component: ExchangeConfirmRemittantComponent
        },
        {
          path: 'remittance_query',
          component: ExchangePaymentInfoComponent
        },
        {
          path: 'file_batch_query',
          component: CbExchangeFileBatchQueryComponent
        },
        {
          path: 'register_enterprise',
          component: CbExchangeRegisterEnterpriseComponent
        },
        {
          path: 'query_enterprise',
          component: CbExchangeQueryEnterpriseComponent
        }
      ]
    }
  ];
}
