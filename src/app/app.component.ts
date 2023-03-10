import { Component,OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map,mergeMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  id!:any;
  name = 'Angular';
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
  
  }

ngOnInit() {
  this.id = localStorage.getItem('currentuser'); 
  this.router.events.pipe(  
  filter(event => event instanceof NavigationEnd),  
  ).subscribe(() => {  
    const rt = this.getChild(this.activatedRoute);  
    rt.data.subscribe(data => {  
      console.log(data);  
      this.titleService.setTitle(data.title)});  
  });  
}  

getChild(activatedRoute: ActivatedRoute) {  
if (activatedRoute.firstChild) {  
  return this.getChild(activatedRoute.firstChild);  
} else {  
  return activatedRoute;  
}  

}  

}





