import { Component, OnInit } from '@angular/core';
import { CustomerSelectorService } from '../customer-selector.service';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn} from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { OrderResultsService } from '../order-results.service';
import { Router } from '@angular/router';
const initialValue = 'A';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})



export class CustomerComponent implements OnInit {
  form: FormGroup;
  customers: SelectItem[];
  selectedCustomers: string;
  toDate: Date;
  fromDate: Date;
  dataJson: any;
  days:any;
  todateSec:any;
  fromdateSec:any;
  millisecondsPerDay:any;
  diff:any;
  weeks:any;
  
  constructor(private customerService:  CustomerSelectorService, private formBuilder: FormBuilder,
    private datepipe: DatePipe, private orderService: OrderResultsService,
    private router: Router) {
    this.form = new FormGroup({
       selectedCustomers: new FormControl(''),
       startDate: new FormControl(''),
       endDate: new FormControl('')
    });
   }

  ngOnInit() {
    this.preLoadData();
    this.preLoadValue();
  }

  preLoadData(){
    this.customerService.getCustomers('display').subscribe(data=> {
    this.customers = data;
    });
  }

  preLoadValue(){
    this.selectedCustomers = initialValue;
    this.toDate = new Date();
    this.fromDate = new Date();
  }

  selectCustomer(){

    this.dataJson = {
      'startDate': typeof this.fromDate === 'string' ? this.fromDate : this.datepipe.transform(this.fromDate, 'MM/dd/yy'),
      'endDate': typeof this.toDate === 'string' ? this.toDate : this.datepipe.transform(this.toDate, 'MM/dd/yy')
    }
    this.orderService.setSubmitCriteria(this.dataJson);
    this.router.navigate(['/orders']);

  }

  onKeyUpfromdate(event: any) {
    this.fromDate = event.target.value;
    console.log(this.fromDate);
    this.todateSec = new Date(this.toDate);
    this.fromdateSec = new Date(this.fromDate);
     
    if (this.todateSec < this.fromdateSec)
    alert('To date must be greater that from date!');
        
     
    // Calculate days between dates
    this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    this.fromdateSec.setHours(0,0,0,1); // Start just after midnight
    this.todateSec.setHours(23,59,59,999); // End just before midnight
    this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
    this.days = Math.ceil(this.diff / this.millisecondsPerDay);
     
    
         
    }
     
    onKeyUptoDate(event: any) {
    this.toDate = event.target.value;
    console.log(this.toDate);
    
    this.todateSec = new Date(this.toDate);
    this.fromdateSec = new Date(this.fromDate);
     
    if (this.todateSec < this.fromdateSec)
    alert('To date must be grater that from date!');
     
    // Calculate days between dates
    this.millisecondsPerDay = 86400 * 1000; // Day in milliseconds
    this.fromdateSec.setHours(0, 0, 0, 1); // Start just after midnight
    this.todateSec.setHours(23, 59, 59, 999); // End just before midnight
    this.diff = this.todateSec - this.fromdateSec; // Milliseconds between datetime objects 
    this.days = Math.ceil(this.diff / this.millisecondsPerDay);
      
      
  }

}
