import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/products/product.service';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss']
})
export class ProductsCreateComponent implements OnInit {

  productForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router:Router,private apiService:ProductService) { }
  private index: number = 0;
  ngOnInit(): void {
    this.productForm = this.formBuilder.group(
      { productName:['',Validators.required],
        productCode: ['', Validators.required],
        productPrice:['',Validators.required],
        productCategory:[""],
        productDescription:[""], 
        productImage:["",Validators.required],
        productOffer:[""],
        productStatus:[""],
        productQuantity:[""]
      }
    )

  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.productForm.value.productImage = event.target.result;
     
      }
    }
  }
  productCategory:Object[] = [
    { Id: 1, Game: 'American Football' },
    { Id: 2, Game: 'Badminton' },
    { Id: 3, Game: 'Basketball' },
    { Id: 4, Game: 'Cricket' },
    { Id: 5, Game: 'Football' },
    { Id: 6, Game: 'Golf' },
    { Id: 7, Game: 'Hockey' },
    { Id: 8, Game: 'Rugby' },
    { Id: 9, Game: 'Snooker' },
    { Id: 10, Game: 'Tennis' }
];
 public fields: Object = { text: 'Game', value: 'Id' };

  onChange(args: any): void {
    if(this.productForm.value.productQuantity==0){
          this.productForm.value.productStatus=='Out of Stock'
    }
}
  // user register
 createProduct() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    }
    this.apiService.create(this.productForm.value).subscribe((res:any) => {
     
    }) 
    this.router.navigate(['admin/products-list']);
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }
  
}
