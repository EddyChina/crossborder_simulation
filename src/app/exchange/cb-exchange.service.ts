import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ReceiptFileUploadVO} from './vo/ReceiptFileUploadVO';
import {environment} from '../../environments/environment';
import {ConfirmRemittanceVO} from './vo/ConfirmRemittanceVO';
import {QueryRemittanceVO} from './vo/QueryRemittanceVO';

@Injectable()
export class CbExchangeService {
  setTitleEmitter = new EventEmitter<{title: string, subTitle: string}>();
  showResponseEmitter = new EventEmitter<string>();
  private httpHeader = new HttpHeaders(
    {'Content-Type': 'application/json'}
  );
  constructor(
    private httpClient: HttpClient,
  ) { }

  setAppComponentTitle(title: string, subTitle: string) {
    this.setTitleEmitter.emit({
      title: title,
      subTitle: subTitle,
    });
  }

  /**
   * 请求结汇
   * @param {ReceiptFileUploadVO} vo 结汇请求的js对象
   * @returns {Observable<Object>} 返回http的一个可观察实例
   */
  receiptFileUpload(vo: ReceiptFileUploadVO) {
    const url = environment.serverUrl + '/exchange/receipt_file_upload';
    return this.httpClient.post(url, vo, {headers: this.httpHeader});
  }

  /**
   * 请求付款
   * @param {ConfirmRemittanceVO} remittanceData 请求付款的js对象
   * @returns {Observable<Object>} 接口返回结果的可观察信息
   */
  confirm_remittance(remittanceData: ConfirmRemittanceVO) {
    const url = environment.serverUrl + '/exchange/confirm_remittance';
    return this.httpClient.post(url, remittanceData, {headers: this.httpHeader});
  }

  query_remittance(data: QueryRemittanceVO) {
    const url = environment.serverUrl + `/exchange/remittance_query/${data.batch_no}/${data.batch_date}/${data.order_id}`;
    console.log('query_remittance.url = ' + url);
    return this.httpClient.get(url, {headers: this.httpHeader});
  }
}
