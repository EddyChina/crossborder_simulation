import { Component, OnInit } from '@angular/core';
import {CbExchangeService} from '../exchange/cb-exchange.service';

@Component({
  selector: 'app-cb-base',
  templateUrl: './cb-base.component.html',
  styleUrls: ['./cb-base.component.css']
})
export class CbBaseComponent implements OnInit {
  constructor(
    protected exchangeService: CbExchangeService
  ) {
  }

  ngOnInit() {
  }

}
