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
  
  
  constructor(private orderResultsService: OrderResultsService) {
    
  }

  ngOnInit() {
    this.loadData();
    
  }

  loadData(){
      this.orderResultsService.getOrderResult().subscribe((data) =>   {        
          this.orders = data;
          console.log("inside component", this.orders);   
      }), error => {
        this.errormsgs = [{ severity: 'error', detail: 'error'}];
      }
  }

 
}
