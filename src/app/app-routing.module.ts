import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCtegoryComponent } from './Category/add-ctegory/add-ctegory.component';
import { CategoriesListComponent } from './Category/categories-list/categories-list.component';
import { EditCategoryComponent } from './Category/edit-category/edit-category.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  {path:"category/add", component:AddCtegoryComponent},
  {path:"categories", component:CategoriesListComponent},
  {path:"categories/edit/:id", component:EditCategoryComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
