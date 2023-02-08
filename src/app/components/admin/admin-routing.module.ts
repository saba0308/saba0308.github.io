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
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-list', component: UserListComponent },
  {path:'products-list',component:ProductsListComponent,
  children:[
    {path:'create',component:ProductsCreateComponent},
  {path:'edit',component:ProductsEditComponent},{
    path:'**',component:ProductsViewComponent
  }
]

   },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
