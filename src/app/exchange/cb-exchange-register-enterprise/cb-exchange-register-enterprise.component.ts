import { Component, OnInit } from '@angular/core';
import {CbBaseComponent} from '../../cb-base/cb-base.component';
import {CbBaseExchangeComponent} from '../../cb-base/cb-base-exchange.component';
import {CbExchangeService} from '../cb-exchange.service';
import {EnterpriseVo} from '../vo/enterprise-vo';

@Component({
  selector: 'app-cb-exchange-register-enterprise',
  templateUrl: './cb-exchange-register-enterprise.component.html',
  styleUrls: ['./cb-exchange-register-enterprise.component.css']
})
export class CbExchangeRegisterEnterpriseComponent extends CbBaseExchangeComponent implements OnInit {
  serviceName = 'register_enterprise';
  vo: EnterpriseVo = new EnterpriseVo();
  constructor(exchangeService: CbExchangeService) {
    super(exchangeService);

    this.vo.mer_id = this.mer_id;
    this.vo.charset = this.charset;
  }
  ngOnInit() {
    const title = '企业资质申请/更新';
    const subTitle = '模拟商户向联动平台发起【企业资质申请/更新】请求';
    this.exchangeService.setAppComponentTitle(title, subTitle);
  }

}
