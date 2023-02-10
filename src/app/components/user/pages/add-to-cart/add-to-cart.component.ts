import { Component, ElementRef,
  OnInit,
  QueryList,
  VERSION,
  ViewChildren } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { CurrencyPipe } from "@angular/common";
import { FormBuilder,FormGroup } from '@angular/forms';
import { userData } from 'src/app/components/sign-in/userData';
import { cartProduct, order } from 'src/app/components/model/product';
import { findIndex } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  items;
  cartProduct:cartProduct[]
  checkoutForm:FormGroup;
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
    ElementRef
  >;
  constructor( public cartService: CartService,private router:Router,
    private currencyPipe: CurrencyPipe,private formBuilder: FormBuilder,private http: HttpClient) { }
    userdata!: userData;
  ngOnInit(): void {
    this.userdata = JSON.parse(localStorage.getItem('currentuser') || '{}');
    this.cartService.loadCart();
    this.items = this.cartService.getItems();
    this.items;
    this.checkoutForm = this.formBuilder.group({
     email: this.userdata.email,
     address:this.userdata.address,
     orderCode:'',
     total:this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        productPrice: sum.productPrice + x.qtyTotal * x.productPrice
      }),
      { qtyTotal: 1, productPrice: 0 }
    ).productPrice,
    orderDate:new Date(),
    });
   
  }

  get total() {
    return this.items.reduce(
      (sum, x) => ({
        qtyTotal: 1,
        productPrice: sum.productPrice + x.qtyTotal * x.productPrice
      }),
      { qtyTotal: 1, productPrice: 0 }
    ).productPrice;
  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

   
  }
    
  
  changeSubtotal(item, index) {
    const qty = item.qtyTotal;
    const amt = item.productPrice;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, "USD");

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML = subTotal_converted;
    this.cartService.saveCart();
  }

  //----- remove specific item
  removeFromCart(item) {
    this.cartService.removeItem(item);
    this.items = this.cartService.getItems();
  }

  //----- clear cart item
  clearCart(items) {
    // this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }
  checkout=false;
  checkOut(){
    this.checkout=!this.checkout;
  }
  order(){
    this.http.post<order[]>('http://localhost:3000/order', JSON.stringify(this.checkoutForm.value))
    console.log(this.checkoutForm.value)
    this.items = this.cartService.clearCart(this.items);
    this.checkoutForm.reset();
    this.router.navigateByUrl('user/products');
    
  }
}
