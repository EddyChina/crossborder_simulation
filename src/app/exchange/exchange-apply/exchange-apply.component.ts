import {Component, OnInit} from '@angular/core';
import {CbExchangeService} from '../cb-exchange.service';
import {CbBaseExchangeComponent} from '../../cb-base/cb-base-exchange.component';
import {ReceiptFileUploadVO} from '../vo/ReceiptFileUploadVO';

@Component({
  selector: 'app-exchange-apply',
  templateUrl: './exchange-apply.component.html',
  styleUrls: ['./exchange-apply.component.css']
})
export class ExchangeApplyComponent extends CbBaseExchangeComponent implements OnInit {
  vo: ReceiptFileUploadVO  = new ReceiptFileUploadVO();
  maxDate = new Date();
  constructor(exchangeService: CbExchangeService) {
    super(exchangeService);
    this.vo.mer_id = this.mer_id;
    this.vo.charset = this.charset;
    this.vo.sign_type = this.sign_type;
    this.vo.batch.notify_url = 'www.baidu.com';
    this.vo.batch.file_path = '/';
    this.vo.batch.file_name = 'RFXS_3861_20180123_USD_18012301.txt';
    this.vo.batch.batch_date = '20180123';
    this.vo.batch.batch_no = '18012301';
    this.vo.batch.currency = this.currency;
  }

  ngOnInit() {
    const title = '结汇申请';
    const subTitle = '模拟商户向联动平台发起【结汇】请求';
    this.exchangeService.setAppComponentTitle(title, subTitle);
  }

  onExchangeApply() {
    this.exchangeService.showResponseEmitter.emit('Requesting......');
    console.log('starting to apply exchange...');
    this.exchangeService.receiptFileUpload(this.vo).subscribe(
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
