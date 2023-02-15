import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd,Event } from '@angular/router';
import { ProductService } from 'src/app/components/admin/services/products/product.service';
import { productData } from 'src/app/components/model/product';
import { filter } from 'rxjs/operators';
import { CartService } from '../../services/cart/cart.service';
import { HttpClient } from '@angular/common/http';
import { TmToastrService } from '@tmlib/ui-sdk/toastr'; 
import { TmComponentStatus } from '@tmlib/ui-sdk/helpers';
export interface cartData{
  email:string,
  product:productData[]
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
message:string;
  constructor(private apiService:ProductService,private toastrService: TmToastrService,private http: HttpClient,private router:Router,private cartService:CartService) { 
   
  }
  // products list
  products:productData[]
  filterProducts:productData[]
  cartsData:cartData;
  ngOnInit(): void {
    this.getAllData();
    this.userData=JSON.parse(localStorage.getItem('currentuser') || '{}');
    console.log(this.userData)

  
  }
  userData;
   items = [];
  getAllData() {
    this.apiService.getAll().subscribe((data: productData[]) => {
      console.log(data);
      this.products = data;
      this.filterProducts=data;
    })
  }
  private index: number = 0;

  showToast(duration) {
    this.toastrService.success( 'check in cart',`Product added succesfully`,{duration});
  }
 
  addToCart(item) {
    
    if (!this.cartService.itemInCart(item)) {
      
      item.qtyTotal=1;
      
      this.showToast(1000);
      // this.http.post<any>('http://localhost:3000/cartProducts/', JSON.stringify(item)).subscribe(()=>{})
      this.cartService.addToCart(item)
     
    
      
      // this.cartService.postCartItem(this.cartsData).subscribe((res:any) => {
  
      // }) ; //add items in cart
      this.items = [...this.cartService.getItems()];
    
    }
    else if(this.cartService.itemInCart(item)){
      item.qtyTotal=item.qtyTotal+1;
      console.log(item.qtyTotal)
      this.cartService.addToCart(item.qtyTotal)
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
