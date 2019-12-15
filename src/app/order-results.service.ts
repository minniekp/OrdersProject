import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { IOrder } from './interface';

interface serverData{
  orders: IOrder[];
}

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

  getOrderResult(): Observable <IOrder[]>{
    this.getSubmitCriteria();
    return this.http.get<serverData>(this.url, this.submitCriteria)
      .pipe(map(res => <IOrder[]>res.orders),
        catchError(this.handleError('getOrderResult',[])));
    
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
    }
  }
}

