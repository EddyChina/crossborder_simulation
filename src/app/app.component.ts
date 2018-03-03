import {Component, OnInit} from '@angular/core';
import {CbExchangeService} from './exchange/cb-exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cardTitle = '';
  cardSubTitle = '';
  responseData = '';
  showResponseDiv = false;

  constructor(
    private exchangeService: CbExchangeService
  ) {
  }

  ngOnInit() {
    this.exchangeService.setTitleEmitter.subscribe(
      (event: {title: string, subTitle: string}) => {
        // this.showResponseDiv = true;
        // console.log(event.title + ',  ' + event.subTitle);
        this.cardTitle = event.title;
        this.cardSubTitle = event.subTitle;
    });
    this.exchangeService.showResponseEmitter.subscribe(
      (data) => {
        this.showResponseDiv = true;
        this.responseData = data;
    });
  }
  onSchedule() {
    // this.showResponseDiv = false;
  }
  onQuestion() {
    // this.showResponseDiv = false;
  }
}
