import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ReceipesComponent } from './recipes/receipes.component';
import { ReceipeDetailsComponent } from './recipes/receipe-details/receipe-details.component';
import { ReceipeListComponent } from './recipes/receipe-list/receipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: ReceipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
