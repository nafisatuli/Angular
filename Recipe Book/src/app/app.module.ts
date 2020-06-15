import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipesComponent } from './recipes/receipes.component';
import { ReceipeListComponent } from './recipes/receipe-list/receipe-list.component';
import { ReceipeDetailsComponent } from './recipes/receipe-details/receipe-details.component';
import { ReceipeItemComponent } from './recipes/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ReceipesComponent, ReceipeListComponent, ReceipeDetailsComponent, ReceipeItemComponent, ReceipeItemComponent, ShoppingListComponent, ShoppingEditComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
