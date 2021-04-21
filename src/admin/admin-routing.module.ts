import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddCtegoryComponent } from '../admin/Category/add-ctegory/add-ctegory.component';
import { CategoriesListComponent } from '../admin/Category/categories-list/categories-list.component';
import { EditCategoryComponent } from '../admin/Category/edit-category/edit-category.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { ProductsListComponent } from './Product/products-list/products-list.component';


const routes: Routes = [
  {path:"category/add", component:AddCtegoryComponent, children: [
    {path: 'start', loadChildren: 'app/modules/routes/login/login.module#LoginModule'}
  ]},
  {path:"categories", component:CategoriesListComponent},
  {path:"categories/edit/:id", component:EditCategoryComponent, children: [
    {path: 'start', loadChildren: 'app/modules/routes/login/login.module#LoginModule'}
  ]},
  {path:"productslist", component:ProductsListComponent},
  {path:"product/add", component:AddProductComponent},
  {path:"product/edit/:id", component:EditProductComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AdminRoutingModule { }