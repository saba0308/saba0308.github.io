import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { TmLayoutModule } from '@tmlib/ui-sdk/layout';
import { TmSidebarModule } from '@tmlib/ui-sdk/sidebar';
import { TmUserModule } from '@tmlib/ui-sdk/user';
import { TmContextMenuModule } from '@tmlib/ui-sdk/context-menu';
import { TmMenuModule } from '@tmlib/ui-sdk/menu';
import { ProfileComponent } from './pages/profile/profile.component';
import { TmCardModule } from '@tmlib/ui-sdk/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TmFormFieldModule } from '@tmlib/ui-sdk/form-field';
import { TmInputModule } from '@tmlib/ui-sdk/input';
import { TmButtonModule } from '@tmlib/ui-sdk/button';
import { TmSelectModule } from '@tmlib/ui-sdk/select';
import { ProductsComponent } from './pages/products/products.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { TmBadgeModule } from '@tmlib/ui-sdk/badge';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    ProductsComponent,
    OrdersComponent,
    AddToCartComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,HttpClientModule,
    UserRoutingModule, TmLayoutModule, TmSidebarModule.forRoot(), TmUserModule, TmMenuModule, TmContextMenuModule,
    TmCardModule, FormsModule, ReactiveFormsModule, TmFormFieldModule, TmInputModule, TmButtonModule, TmSelectModule,TmBadgeModule
  ],
  providers: [
    CurrencyPipe
]
})
export class UserModule { }
