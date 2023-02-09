import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd,Event } from '@angular/router';
import { ProductService } from 'src/app/components/admin/services/products/product.service';
import { productData } from 'src/app/components/model/product';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
message:string;
  constructor(private apiService:ProductService,private router:Router) { 
   
  }
  // products list
  products:productData[]
  filterProducts:productData[]
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAll().subscribe((data: productData[]) => {
      console.log(data);
      this.products = data;
      this.filterProducts=data;
    })
  }
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
