import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { Order } from '../app/models/order.model';



@Injectable({
  providedIn: 'root'
})
export class OrderResultsService {

  private submitCriteria: Object;
  url = '/api/orders';

  setSubmitCriteria(submitData){
    this.submitCriteria = submitData;
    localStorage.setItem('submitOrderCriteria', JSON.stringify(submitData));
  }

  getSubmitCriteria(){
    this.submitCriteria = this.submitCriteria ? 
    this.submitCriteria : JSON.parse(localStorage.getItem('submitOrderCriteria'));
    return this.submitCriteria;
  }

  constructor(private http: HttpClient) { }

  getOrderResult(): Observable <Order[]>{
    this.getSubmitCriteria();
    return this.http.get<Order[]>(this.url, this.submitCriteria).pipe(
      map(data => {
        return data.map(data => {
          return new Order().deserialize(data)
        })
      }),
      catchError(this.handleError('getOrderResult',[]))
    );
    
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
    }
  }
}

