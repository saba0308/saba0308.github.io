import { HttpClient,HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  throwError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { productData } from 'src/app/components/model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // https://template-json-server.vercel.app/api
  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient,private http : HttpClient) { }

  create(productData:any): Observable<productData> {
    return this.httpClient.post<productData>(this.apiServer + '/products/', JSON.stringify(productData), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getAll(): Observable<productData[]> {
    return this.httpClient.get<productData[]>(this.apiServer + '/products/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
  find(id:any): Observable<productData[]> {
    return this.httpClient.get<productData[]>(this.apiServer + '/products/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  update(id:any,productsData:any ): Observable<productData> {
    return this.httpClient.patch<productData>(this.apiServer + '/products/' + id, JSON.stringify(productsData), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  delete(pid:any):Observable<productData>{
   
    return this.httpClient.delete<productData>(this.apiServer + '/products/' + pid,this.httpOptions)
   
  }
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
}
