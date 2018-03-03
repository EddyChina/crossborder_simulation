import { Component, OnInit } from '@angular/core';
import {CbBaseComponent} from '../../cb-base/cb-base.component';
import {CbBaseExchangeComponent} from '../../cb-base/cb-base-exchange.component';
import {EnterpriseVo} from '../vo/enterprise-vo';
import {CbExchangeService} from '../cb-exchange.service';

@Component({
  selector: 'app-cb-exchange-query-enterprise',
  templateUrl: './cb-exchange-query-enterprise.component.html',
  styleUrls: ['./cb-exchange-query-enterprise.component.css']
})
export class CbExchangeQueryEnterpriseComponent extends CbBaseExchangeComponent implements OnInit {
  serviceName = 'query_enterprise';
  vo: EnterpriseVo = new EnterpriseVo();
  constructor(exchangeService: CbExchangeService) {
    super(exchangeService);
    this.vo.mer_id = this.mer_id;
    this.vo.charset = this.charset;
  }
  ngOnInit() {
    const title = '企业资质校验结果查询';
    const subTitle = '模拟商户向联动平台发起【企业资质校验结果】查询';
    this.exchangeService.setAppComponentTitle(title, subTitle);
  }

}
