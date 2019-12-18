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

  // colHeaderOrders: any[];
  orders: any = [];
  errormsgs: Message[] = [];
  
  
  constructor(private orderResultsService: OrderResultsService) {
    // this.colHeaderOrders = [
    //   {field: 'recipient',  subfield: 'name', header:'Customer Name', width:'25%'},
    //   {field: 'email', subfield: 'email', header:'Customer Email', width: '25%'},
    //   {field: 'items', subfield: 'total_price', header:'Total Price', width: '10%'},
    //   {field: 'created_at', header:'Date Time', width:'25%'},
    //   {field: 'items', subfield:'id', header:'Item Id', width:'15%'},
    //   {field: 'items', header:'name', width: '25%'},
    //   {field: 'delivery', subfield: 'courier', header:'Courier', width:'7%'},
    //   {field: 'delivery', subfield: 'method', header:'Method', width:'10%'}
    // ]
   }

  ngOnInit() {
    this.loadData();
    
  }

  loadData(){
      this.orderResultsService.getOrderResult().subscribe((data) =>   {        // this.orders = Object.keys(data).map(key => data[key])
          this.orders = data;
          console.log("inside component", this.orders);   
      }), error => {
        this.errormsgs = [{ severity: 'error', detail: 'error'}];
      }
  }

  // populateData(){
  //     this.recepientName = this.orders['name'];
  //     this.totalPrice = this.orders['total_price'];
  //     this.createdDate = this.orders['created_at'];
  //     this.items = this.orders['items'];
  //     this.deliveryDetails = this.orders['delivery'];
  // }

}
