import { Component, OnInit } from '@angular/core';
import {CbBaseComponent} from '../../cb-base/cb-base.component';
import {CbBaseExchangeComponent} from '../../cb-base/cb-base-exchange.component';
import {BatchFileQueryVo} from '../vo/batch-file-query-vo';
import {CbExchangeService} from '../cb-exchange.service';

@Component({
  selector: 'app-cb-exchange-file-batch-query',
  templateUrl: './cb-exchange-file-batch-query.component.html',
  styleUrls: ['./cb-exchange-file-batch-query.component.css']
})
export class CbExchangeFileBatchQueryComponent extends CbBaseExchangeComponent implements OnInit {
  serviceName = 'file_batch_query';
  vo: BatchFileQueryVo = new BatchFileQueryVo();
  maxDate = new Date();

  constructor(exchangeService: CbExchangeService) {
    super(exchangeService);
    this.vo.mer_id = this.mer_id;
    this.vo.charset = this.charset;
    this.vo.batch_date = '20180123';
    this.vo.batch_no = '18012301';
  }

  ngOnInit() {
    const title = '文件校验结果查询接口';
    const subTitle = '模拟商户向联动平台发起【收结汇文件校验结果】查询';
    this.exchangeService.setAppComponentTitle(title, subTitle);
  }

}
