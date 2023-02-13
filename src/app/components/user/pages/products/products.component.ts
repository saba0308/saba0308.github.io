import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd,Event } from '@angular/router';
import { ProductService } from 'src/app/components/admin/services/products/product.service';
import { productData } from 'src/app/components/model/product';
import { filter } from 'rxjs/operators';
import { CartService } from '../../services/cart/cart.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
message:string;
  constructor(private apiService:ProductService,private http: HttpClient,private router:Router,private cartService:CartService) { 
   
  }
  // products list
  products:productData[]
  filterProducts:productData[]
  ngOnInit(): void {
    this.getAllData();
  }
   items = [];
  getAllData() {
    this.apiService.getAll().subscribe((data: productData[]) => {
      console.log(data);
      this.products = data;
      this.filterProducts=data;
    })
  }
  addToCart(item) {
    
    if (!this.cartService.itemInCart(item)) {
      item.qtyTotal = 1;
      // this.http.post<any>( 'http://localhost:3000/cartProducts/', JSON.stringify(item))
      this.cartService.addToCart(item); //add items in cart
      this.items = [...this.cartService.getItems()];
    
    }
  }
  selectedItem=" ";
  filterData(data:string){
    this.filterProducts=this.products.filter((p)=>p.productCategory===data || data==='')
  } 
  getClassOf(val:any) {
    if (val ===0 ) {
      return 'offerNone';
    }  else {
      return 'offerBatch';
    }
  }
  getClassofQuantity(val:any,status:any){
    if(val===0||status==='Out of stock'){
      return 'outofStock';
    }
    else{
      return 'inStock'
    }
  }
}
