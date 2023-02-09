import { Component, Input, OnInit } from '@angular/core';
import { Router,NavigationEnd,Event } from '@angular/router';
import { TmSidebarService } from '@tmlib/ui-sdk/sidebar';
import { AuthService } from '../sign-in/services/auth.service';
import { userData } from '../sign-in/userData';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() name: string;
  userdata!: userData;
  items = [
    { title: 'Profile', link: "/user/profile" },
    { title: 'Logout', link: "/auth/log-in" },
  ];
  message:string;
  constructor(private router: Router, private apiService: AuthService, private sidebarService: TmSidebarService) {
    router.events
    .pipe(filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd))
    .subscribe((res: NavigationEnd) => {
      if (res.url == '/user/products') {
        this.message = "Products"
      }
      else if(res.url=='/user/orders'){
        this.message='My Orders'
      }
      else if(res.url=='/user/cart'){
        this.message='My Cart'
      }
    });
   }
  id: any;
  status = "online";
  offline = "offline";
 
  ngOnInit(): void {
    this.userdata = JSON.parse(localStorage.getItem('currentuser') || '{}');
    this.id = this.userdata.id;
    // online Status
    this.statusData();
    
  }
  toggle() {
    this.sidebarService.toggle(false, 'left');

  }
  statusData() {
    this.userdata.status = this.status;
    this.apiService.update(this.userdata.id, this.userdata).subscribe((res: any) => {
      console.log('online!');
    });
  }
  cartRoute(){
    this.router.navigateByUrl('/user/cart')
  }
  logOut() {
    this.userdata.lastSeen = new Date();
    console.log(this.userdata.lastSeen)
    this.userdata.status = this.offline;
    // offline and lastseen
    this.apiService.update(this.id, this.userdata).subscribe((res: any) => {
     
    })
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('currentuser');
    this.router.navigate(['/auth/log-in']);
    console.log('Post updated successfully!');
  }


}
