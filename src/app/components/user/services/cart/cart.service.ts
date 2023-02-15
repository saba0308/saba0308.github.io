import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { cartProduct, order } from 'src/app/components/model/product';
import {  throwError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  cartProduct:cartProduct[];
  // Observable<cartProduct>
  cart(product):Observable<order>{
    
     return this.http.post<order>(this.apiServer + '/cartProducts/', JSON.stringify(product), this.httpOptions)
    .pipe(
       catchError(this.errorHandler)
     )
  }
//     const productExistInCart = this.items.find(({name}) => name === product.name); // find product by name
//     if (!productExistInCart) {
//       this.items.push({...product, num:1}); // enhance "porduct" opject with "num" property
//       return;
//     }
//     productExistInCart.num += 1;
//   }

//   getItems() {
//     // return this.http.get<cartProduct[]>(this.apiServer + '/cartProducts/')
//     // .pipe(
//     //   catchError(this.errorHandler)
//     // )
//     return this.items;
//   }
//  deleteItem(id): Observable<cartProduct[]>{
//   return this.http.delete<cartProduct[]>(this.apiServer + '/cartProducts/' + id,this.httpOptions)
//  }
//   clearCart() {
//     this.items = [];
//     return this.items;
//   }
//   removeProduct(product) {
//     this.items = this.items.filter(({name}) => name !== product.productName)
//    }

//   getShippingPrices() {
//     return this.http.get('/assets/shipping.json');
//   }
addToCart(addedItem) {
  this.items.push(addedItem);
  // return this.http.post<any>(this.apiServer + '/cartProducts/', JSON.stringify(addedItem), this.httpOptions)
  //   .pipe(
  //      catchError(this.errorHandler)
  //    )
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

  this.saveCart();
}

getItems() {
  return this.items;
} 

loadCart(): void {
  this.items = JSON.parse(localStorage.getItem("cart_items")) ?? [];

}

saveCart(): void {
  localStorage.setItem('cart_items', JSON.stringify(this.items)); 
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

}