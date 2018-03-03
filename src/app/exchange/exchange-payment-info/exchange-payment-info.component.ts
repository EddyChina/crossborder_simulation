import { Component, OnInit } from '@angular/core';
import {CbBaseComponent} from '../../cb-base/cb-base.component';
import {CbBaseExchangeComponent} from '../../cb-base/cb-base-exchange.component';
import {QueryRemittanceVO} from '../vo/QueryRemittanceVO';

@Component({
  selector: 'app-exchange-payment-info',
  templateUrl: './exchange-payment-info.component.html',
  styleUrls: ['./exchange-payment-info.component.css']
})
export class ExchangePaymentInfoComponent extends CbBaseExchangeComponent implements OnInit {
  service = 'remittance_query';
  vo: QueryRemittanceVO = new QueryRemittanceVO();

  ngOnInit() {
    const title = '付款信息查询';
    const subTitle = '模拟商户向联动平台发起【付款信息查询】请求';
    this.exchangeService.setAppComponentTitle(title, subTitle);
  }
  onQueryRemittance() {
    this.exchangeService.showResponseEmitter.emit('Requesting......');
    this.exchangeService.query_remittance(this.vo).subscribe(
      (data) => {
        this.exchangeService.showResponseEmitter.emit(JSON.stringify(data));
        console.log('the data from server : ' + data);
      },
      error => {
        console.log('*******something was wrong*******');
        this.exchangeService.showResponseEmitter.emit(JSON.stringify(error));
        console.log(error);
      });
  }

}
