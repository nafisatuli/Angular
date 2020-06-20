import { EventEmitter } from '@angular/core';
import { Recipe } from './receipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //array of recipe in the recipe service
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://c1.wallpaperflare.com/preview/992/474/505/food-meat-recipe-power.jpg'
    ),
  ];
  getRecipe() {
    return this.recipes.slice(); //exact copy of recipes so that recipes can't get access
  }
}
