import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './receipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>(); //pass array of recipe as a value
  // recipeSelected = new Subject<Recipe>(); //it is no need after adding routing

  //array of recipe in the recipe service
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Stuffed Potatoes',
  //     'A super tasty dish!',
  //     'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/10/4/0/FNM_110119-Name-This-Dish-Stuffed-Potatoes_s4x3.jpg.rend.hgtvcom.826.620.suffix/1570214935058.jpeg',
  //     [new Ingredient('Meat', 1), new Ingredient('French fry', 20)]
  //   ),
  //   new Recipe(
  //     'Tandoori Chicken',
  //     'Smells great and tastes so exotic!',
  //     'https://www.mozismenu.com/wp-content/uploads/2018/03/Tandoori-Chicken-0.jpg',
  //     [new Ingredient('Naan', 2), new Ingredient('Garlic sauce', 1)]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  //override the set of recipes
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe() {
    return this.recipes.slice(); //exact copy of recipes so that recipes can't get access
  }
  getSingleRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppinglist(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice()); //in recipe list we need to listen to this
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1); //remove it
    this.recipesChanged.next(this.recipes.slice()); //emit a copy of the updated recipe
  }
}
