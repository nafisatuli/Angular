import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { from } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  //added ShoppingListService in app.module bcz we will use it in other service

  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    //getting informed that something changed
    this.slService.ingredientChangedAdd.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }
  // OnIngAdded(ing: Ingredient) {
  //   this.ingredients.push(ing);
  // }
}
