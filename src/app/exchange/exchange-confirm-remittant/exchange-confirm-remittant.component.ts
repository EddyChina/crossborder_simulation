import { Component, OnInit } from '@angular/core';
import {CbBaseComponent} from '../../cb-base/cb-base.component';
import {CbExchangeService} from '../cb-exchange.service';
import {CbBaseExchangeComponent} from '../../cb-base/cb-base-exchange.component';
import {ConfirmRemittanceVO} from '../vo/ConfirmRemittanceVO';

@Component({
  selector: 'app-exchange-confirm-remittant',
  templateUrl: './exchange-confirm-remittant.component.html',
  styleUrls: ['./exchange-confirm-remittant.component.css']
})
export class ExchangeConfirmRemittantComponent extends CbBaseExchangeComponent implements OnInit {
  service = 'confirm_remittance';
  vo: ConfirmRemittanceVO = new ConfirmRemittanceVO();
  ngOnInit() {
    const title = '确认付款';
    const subTitle = '模拟商户向联动平台发起【付款】请求';
    this.exchangeService.setAppComponentTitle(title, subTitle);

    // 初始化信息

    /*this.vo.remit_amount = 0;
    this.vo.remit_num = 0;
    this.vo.com_amt = 0;*/
    this.vo.batch_date = '20180123';
    this.vo.batch_no = '18012301';
  }

  onRemittance() {
    this.exchangeService.showResponseEmitter.emit('Requesting......');
    this.exchangeService.confirm_remittance(this.vo).subscribe(
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
