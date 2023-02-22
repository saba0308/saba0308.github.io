import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cartProduct, order, productData } from 'src/app/components/model/product';
import {  throwError,Observable, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { cartData } from '../../pages/products/products.component';

@Injectable({ providedIn: 'root' })

export class CartService {
  private apiServer = "https://template-json-server.vercel.app/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  items=[];
  cartProduct:productData[];
  public productList=new BehaviorSubject<productData[]>([])
  // Observable<cartProduct>
  cart(product):Observable<order>{
    
     return this.http.post<order>(this.apiServer + '/cartProducts/', JSON.stringify(product), this.httpOptions)
    .pipe(
       catchError(this.errorHandler)
     )
  }

addToCart(addedItem) {
  this.items.push(addedItem);
  this.saveCart();
 
  // this.cart(addedItem);
  // console.log(addedItem);

  //-----check if there are items already added in cart
  /* let existingItems = [];
  if ( localStorage.getItem('cart_items')){//----- update by adding new items
    existingItems = JSON.parse(localStorage.getItem('cart_items'));
    existingItems = [addedItem, ...existingItems];
    console.log( 'Items exists');
  } */
  //-----if no items, add new items
  /* else{ 
    console.log( 'NO items exists');
    existingItems = [addedItem]
  } */

  
}
postCartItem(addedItem):Observable<any>{
  return this.http.post<any>( 'http://localhost:3000/cartProducts/', JSON.stringify(addedItem), this.httpOptions)
  .pipe(
     catchError(this.errorHandler)
   )
}
postProfileDashboardData(addedItem):Observable<any>{
  return this.http.post<any>( 'http://localhost:3000/comments/', JSON.stringify(addedItem), this.httpOptions)
  .pipe(
     catchError(this.errorHandler)
   )
}
updatCartItem(id,addedItem):Observable<any>{
  return this.http.post<any>( 'http://localhost:3000/cartProducts/'+id, JSON.stringify(addedItem), this.httpOptions)
  .pipe(
     catchError(this.errorHandler)
   )
}
getAllCartItems(){
  return this.http.get<productData[]>("http://localhost:3000/products/")
  .pipe(map((res:productData[])=>{
    return res;
  }))
}
getCartItems(){
  // return this.productList.asObservable();

  // this.loadCart();
  return this.items;
  // 
  
 }
 setCartItems(product:productData[]){
  //  this.productList.next(product)

  this.items.push(product);
  this.saveCart();
 
 }
getItems() {
  return this.items;
} 

loadCart(): void {
  this.items = JSON.parse(localStorage.getItem("cart_items")) ?? [];

}

saveCart():void {
  localStorage.setItem('cart_items', JSON.stringify(this.items)); 
 
}
updateQty(id,addedItem):Observable<any> {
  return this.http.patch<any>( 'http://localhost:3000/cartProducts/' + id, JSON.stringify(addedItem), this.httpOptions)
  .pipe(
     catchError(this.errorHandler)
   )
}

clearCart(items) {
  this.items = [];

  localStorage.removeItem("cart_items")
}

removeItem(item) {
  const index = this.items.findIndex(o => o.id === item.id);

  if (index > -1) {
    this.items.splice(index, 1);
    this.saveCart();
  }
}

itemInCart(item): boolean {
  return this.items.findIndex(o => o.id === item.id) > -1;
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
 getPostCode(){
  return this.http.get<any>('https://indianpincodeapi.onrender.com/pincode')
  .pipe(
    catchError(this.errorHandler)
  )
 }
 getAllOrder(): Observable<any> {
  return this.http.get<any>('http://localhost:3000/order/')
  .pipe(
    catchError(this.errorHandler)
  )
}
getByIdOrder(id:any): Observable<any> {
  return this.http.get<any>( 'http://localhost:3000/order/' + id)
  .pipe(
    catchError(this.errorHandler)
  )
}
// getAllCart(): Observable<cartData> {
//   return this.http.get<cartData>('http://localhost:3000/cartProducts/')
//   .pipe(
//     catchError(this.errorHandler)
//   )
// }
putOrderStatus(id:any,productsData:any):Observable<any>{
  return this.http.patch<any>( 'http://localhost:3000/order/' + id, JSON.stringify(productsData), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}
}