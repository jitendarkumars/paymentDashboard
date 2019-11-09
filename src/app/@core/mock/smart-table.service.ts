import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    firstName: 'Jeet',
    mobileNumber: '9680379063',
    operator: 'Airtel',
    amount:100,
    email: 'mdo@gmail.com'
  },
{
  id: 2,
  firstName: 'jitendar',
  mobileNumber: '9680379063',
  operator: 'Airtel',
  amount:100,
  email: 'jeet@gmail.com'
}];

  getData() {
    return this.data;
  }
}
