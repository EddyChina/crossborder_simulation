import { Component, OnInit } from '@angular/core';
import {CbExchangeService} from '../exchange/cb-exchange.service';
import {CbBaseComponent} from './cb-base.component';

@Component({
  selector: 'app-cb-base',
  templateUrl: './cb-base.component.html',
  styleUrls: ['./cb-base.component.css']
})
export class CbBaseExchangeComponent extends CbBaseComponent implements OnInit {
  prefix = 'RB_';				// 批次ID前缀
  protected charset = 'UTF-8';
  protected mer_id = '3861';
  protected currency = 'USD';
  protected sign_type = 'RSA';
  protected sign = '';
  protected maxDate = new Date();

  constructor(
    protected exchangeService: CbExchangeService
  ) {
    super(exchangeService);
  }
  ngOnInit() {
  }

}
