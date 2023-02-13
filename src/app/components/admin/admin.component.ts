import { Component, OnInit,Inject, OnDestroy, Input, TemplateRef } from '@angular/core';
import { TmSidebarService } from '@tmlib/ui-sdk/sidebar';
import { TM_WINDOW } from '@tmlib/ui-sdk';
import{ TmMenuService} from '@tmlib/ui-sdk/menu';
 import { TmMediaBreakpointsService,
  TmThemeService } from '@tmlib/ui-sdk';
  import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';
import{DataService}from '../admin/services/data.service'
import { NavigationEnd, Router,Event  } from '@angular/router';
import { userData } from '../sign-in/userData';
import { AuthService } from '../sign-in/services/auth.service';
import { filter } from 'rxjs/operators';
import { TmDialogService } from '@tmlib/ui-sdk/dialog';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit,OnDestroy  {
  @Input() name: string;
  currentUser!:string|null;
  items = [
    { title: 'Profile' },
    { title: 'Logout' ,link:"/auth/log-in"},
  ];
  private destroy$: Subject<void> = new Subject<void>();
  currentTheme = 'default';
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate',
      name: 'Corporate',
    },
  ];
  lang!: string;
  arabicButton:boolean=false;
  englishButton: boolean=true;
  message:string;
  id!: string | null;
  constructor(private router:Router,private dataService:DataService,private sidebarService: TmSidebarService,private tmMenuService: TmMenuService, private themeService: TmThemeService,
    private breakpointService: TmMediaBreakpointsService,private translate: TranslateService,private apiService:AuthService,private dialogService:TmDialogService) { translate.setDefaultLang('en');
    this.englishButton = true;
    router.events
      .pipe(filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((res: NavigationEnd) => {
        if (res.url == '/admin/dashboard') {
          this.message = "Dashboard"

        }
        else if (res.url == '/admin/user-list') {
          this.message = "Users"
        }
        else if (res.url == '/admin/products-list') {
          this.message = "Products"
        }
        else if (res.url == '/admin/products-list/create') {
          this.message = " Create Product"
        }

      });
    
  }
    useLanguage(lang:string) {
      this.dataService.sendMessage(lang);
      this.translate.use(lang);
      if (lang === 'ar') {
      
        this.arabicButton = true;
        this.englishButton = false;
      } else {
      
        this.arabicButton = false;
        this.englishButton = true;
      }
    }
  sidebarShow: boolean = false;
  direction = 'ltr';
  userPictureOnly: boolean = false;
  ngOnInit() {
    this.currentUser = localStorage.getItem('adminValue');
    this.changeTheme(this.currentTheme);
    this.themeService.changeTheme(this.currentTheme)
    this.currentTheme = this.themeService.currentTheme;
 
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName);

     
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName:string) {
    this.themeService.changeTheme(themeName);
  }
tag:string;
  toggle() {

    if(this.direction=='rtl')
    {
    this.sidebarService.toggle(false, 'left');
    }
    else if(this.direction=='ltr'){
   
      this.sidebarService.toggle(false, 'right');
    }
  }

  checked = false;

  rtl(checked: boolean) {
    this.checked = checked;
    if(checked)
    {
      this.direction = 'rtl';
      this.tag="left";
    }
   else{
    this.direction = 'ltr';
    this.tag="right";
   }
     
    
 
  }

  ltr(checked: boolean) {
    this.checked = checked;
  if(checked)
  {
    this.direction = 'rtl';
  }
 else{
  this.direction = 'ltr';
 }
  

 
  }
dark(checked:boolean){
  if(checked)
  {
    var themeName="dark";
    this.themeService.changeTheme(themeName)
  }
  else{
    var themeName="default";
    this.themeService.changeTheme(themeName)
  }
}
cosmic(checked:boolean){
  if(checked)
  {
    var themeName="cosmic";
    this.themeService.changeTheme(themeName)
  }
  else{
    var themeName="default";
    this.themeService.changeTheme(themeName)
  }
}
corporate(checked:boolean){
  if(checked)
  {
    var themeName="corporate";
    this.themeService.changeTheme(themeName)
  }
  else{
    var themeName="default";
    this.themeService.changeTheme(themeName)
  }
}
  logOut(){
    localStorage.setItem('isAdminLoggedIn','false');    
    localStorage.removeItem('adminValue');
    this.router.navigate(['/auth/log-in'])
  }
  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, { context: ' Do You Want Logout?' });
  }
}
