import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productData } from 'src/app/components/model/product';
import { CartService } from '../../services/cart/cart.service';
import { cartData } from '../products/products.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
 orderData;
productData;
 productDetails:cartData;
  constructor(private http:HttpClient,private cartService:CartService) { }
userData;
  ngOnInit(): void {
    this.userData=JSON.parse(localStorage.getItem('currentuser') || '{}');
    this.getData();
  }
  orderDate;
getData(){
  this.cartService.getAllOrder().subscribe((data) => {
    // console.log(data);
    this.orderData = data;
    console.log(this.orderData);
    this.orderData=this.orderData.filter((p)=>p.email===this.userData.email );
   this.orderDate=this.orderData.map((p)=>this.orderDate=p.date);
    console.log(this.orderDate)
  })
  // this.cartService.getAllCart().subscribe((data) => {

  // // this.productDetails=data;
  // //  if(this.productDetails.date === this.orderDate && this.productDetails.email===this.userData.email)
  // //  {

  // //  }
  
      
       
                                                          
  // //  console.log(this.productDetails.map((p)=>(p.product[0].productName)))  
 
  // });
  
}
orderdeatils=false;
orderFilter;
orderDetails(item){
this.orderdeatils=true;
this.orderFilter=this.orderData.filter((p)=>p.id===item.id );
}
back(){
  this.orderdeatils=false;
}
}
