import { Component, OnInit, Input} from '@angular/core';
import { OrderResultsService } from '../order-results.service';
import { Message } from 'primeng/api';
import { Order } from '../models/order.model';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  
  orders: any = [];
  errormsgs: Message[] = [];
  size: number;
  chargeCustomer: number = 0.0;
  cur: string;
   
  
  constructor(private orderResultsService: OrderResultsService) {
    
  }

  ngOnInit() {
    this.loadData();
    
  }

  loadData(){
    this.orderResultsService.getOrderResult().subscribe((data) => {        
        this.orders = data;
        this.size = data.length;
               
        console.log("inside component", this.orders);  
        for(let i=0;i<this.size;i++){
          this.chargeCustomer = this.chargeCustomer +
          this.convertToFloat(this.orders[i].charge_customer.total_price);
        }
        this.cur = this.orders[0].charge_customer.currency;
        console.log("charge Customer", this.chargeCustomer);
                 
    }), error => {
      this.errormsgs = [{ severity: 'error', detail: 'error'}];
    }
}

convertToFloat(val){
  return parseFloat(val);
}

}
