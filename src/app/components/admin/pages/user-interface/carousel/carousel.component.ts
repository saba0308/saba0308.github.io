import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInterfaceService } from '../../../services/user-interface.service';
import { of } from 'rxjs';

export interface Carousel{
  id:any;
  carouselImage:any;
  }

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
 public testData:any=[];

  //  carouselData$;
  constructor(public interfaceService:UserInterfaceService,private router:Router,private formBuilder:FormBuilder  ) { }
  
  ngOnInit(): void {
    
   this.getData();
  
  }
  create(){
 this.router.navigateByUrl('admin/user-interface/carousel-create')
  }
getData(){
  // this.carouselData$ = this.interfaceService.getAll();
  this.interfaceService.getAll().subscribe(
    (data: any) => {
      console.log(data);
      // data.forEach((carousel: any) => {
      //   this.carouselData.push(carousel);
       
      // });
      this.testData=data;
     
      console.log(this.testData," after assigning data from api");
      // move the code that depends on carouselData here
    },
    (error) => {
      console.log(error);
    }
  );
}
}
