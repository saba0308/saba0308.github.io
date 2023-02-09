import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'cart',component:AddToCartComponent},
  {path:'**',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
