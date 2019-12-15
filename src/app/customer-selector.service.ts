import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import  'rxjs/add/operator/map';
import { SelectItem } from 'primeng/api';
const allOption = { label:'All', value:'A'};

@Injectable({
  providedIn: 'root'
})
export class CustomerSelectorService {

  constructor(private http: HttpClient) { }

  
  private url = '/api/customers';

  
  getCustomers(value?): Observable<any>{
    return this.http.get(this.url).map((customers: SelectItem[]) => {
      const customersList: any = [];
      if ( value === 'display'){
        customersList.push(allOption);
      }
      for(const customer of customers){
        customersList.push({label: customer['name'], value: customer['name']});
      }
      return customersList;
    })
    .pipe(catchError(this.handleError('getCustomers',[])))
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
    }
  }
  
    
}
