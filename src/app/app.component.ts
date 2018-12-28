import { Component, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'ibe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IBE';
  isCollapsed = true;

  rangeMinDate: Date;
  rangeMaxDate: Date;
  showWeekNumbers: boolean;

 
  constructor() {
    this.rangeMinDate = new Date();
    this.rangeMaxDate = new Date();
    this.rangeMinDate.setDate(this.rangeMinDate.getDate() - 1);
    this.rangeMaxDate.setDate(this.rangeMaxDate.getDate() + 365);
    this.showWeekNumbers = false;
  }


  @ViewChild('drp') daterangepicker: BsDaterangepickerDirective;
  bsConfig: object;
  minDate = new Date(2018, 5, 13);

  setOptions(): void {
    this.bsConfig = Object.assign({}, {
      minDate: this.minDate, 
      showWeekNumbers: false,
      rangeInputFormat: 'YYYY-DD-MM',
      containerClass: 'theme-blue'
    });
    this.daterangepicker.setConfig();
    setTimeout(() => {
      this.daterangepicker.toggle();
    });
  }

  ngOnInit() {}
}
