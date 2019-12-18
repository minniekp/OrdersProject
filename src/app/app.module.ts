import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrdersComponent } from './orders/orders.component';
import { DropdownModule } from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import { CustomerSelectorService } from './customer-selector.service';
import { OrderResultsService } from './order-results.service';
import { ValuesArrayPipe } from './values-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    ValuesArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    TableModule
  ],
  providers: [DatePipe, CustomerSelectorService, OrderResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
