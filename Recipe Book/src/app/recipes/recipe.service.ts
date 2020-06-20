import { EventEmitter } from '@angular/core';
import { Recipe } from './receipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //array of recipe in the recipe service
  private recipes: Recipe[] = [
    new Recipe(
      'Stuffed Potatoes',
      'A super tasty dish!',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/10/4/0/FNM_110119-Name-This-Dish-Stuffed-Potatoes_s4x3.jpg.rend.hgtvcom.826.620.suffix/1570214935058.jpeg',
      [new Ingredient('Meat', 1), new Ingredient('French fry', 20)]
    ),
    new Recipe(
      'Tandoori Chicken',
      'Smells great and tastes so exotic!',
      'https://www.mozismenu.com/wp-content/uploads/2018/03/Tandoori-Chicken-0.jpg',
      [new Ingredient('Naan', 2), new Ingredient('Garlic sauce', 1)]
    ),
  ];
  getRecipe() {
    return this.recipes.slice(); //exact copy of recipes so that recipes can't get access
  }
}
