import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/components/admin/services/products/product.service';
import { productData } from 'src/app/components/model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private apiService:ProductService) { }
  // products list
  products:productData[]
  
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAll().subscribe((data: productData[]) => {
      console.log(data);
      this.products = data;
    })
  }
}
