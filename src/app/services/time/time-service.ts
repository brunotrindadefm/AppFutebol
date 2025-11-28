import { Injectable } from '@angular/core';
import { ITime } from '../../interfaces/ITime';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base-service';

@Injectable({
  providedIn: 'root',
})
export class TimeService extends BaseService<ITime> {

  constructor(protected override http: HttpClient) {
    super(http, 'http://localhost:3000/times');
  }
}
