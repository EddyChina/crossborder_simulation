import { Component, OnInit } from '@angular/core';
import {CbBaseComponent} from '../../cb-base/cb-base.component';
import {CbBaseExchangeComponent} from '../../cb-base/cb-base-exchange.component';

@Component({
  selector: 'app-cb-exchange-register-enterprise',
  templateUrl: './cb-exchange-register-enterprise.component.html',
  styleUrls: ['./cb-exchange-register-enterprise.component.css']
})
export class CbExchangeRegisterEnterpriseComponent extends CbBaseExchangeComponent implements OnInit {
  serviceName = 'register_enterprise';
  enterprise_name = '';
  enterprise_org_code = '';
  enterprise_contact = '';
  enterprise_phone = '';
  enterprise_email = '';
  ngOnInit() {
    const title = '企业资质申请/更新';
    const subTitle = '模拟商户向联动平台发起【企业资质申请/更新】请求';
    this.exchangeService.setAppComponentTitle(title, subTitle);
  }

}
