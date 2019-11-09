import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  settings = {
    actions: {
      delete: false,
      add: false,
      edit:false
  },
    columns: {
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      mobileNumber: {
        title: 'Mobile Number',
        type: 'number',
      },
      operator: {
        title: 'Operator',
        type: 'string',
      },
      amount: {
        title: 'Amount',
        type: 'number',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

}
