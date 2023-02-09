import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsCreateComponent } from './pages/products-list/products-create/products-create.component';
import { ProductsEditComponent } from './pages/products-list/products-edit/products-edit.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductsViewComponent } from './pages/products-list/products-view/products-view.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,data: {
    title: 'Admin'
  } },
  { path: 'user-list', component: UserListComponent,data: {
    title: 'Admin'
  } },
  {path:'products-list',component:ProductsListComponent,
  children:[
    {path:'create',component:ProductsCreateComponent,data: {
      title: 'Admin'
    }},
  {path:'edit',component:ProductsEditComponent,data: {
    title: 'Admin'
  }},{
    path:'**',component:ProductsViewComponent,data: {
      title: 'Admin'
    }
  },
],data: {
  title: 'Admin'
}

   },
  { path: '**', component: DashboardComponent,data: {
    title: 'Admin'
  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
