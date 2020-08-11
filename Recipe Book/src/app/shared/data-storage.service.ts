//we are using this for http functionality to it clearly

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Recipe } from '../recipes/receipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  //storing recipes
  //we could inject the recipe.service into datastorage.service then we could directly load our recipe.service and can avoid extra arguement
  //storeRecipes(recipes: Recipe[]) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipe();
    //want to store all my recipe, we will use put() for override data..it is depend on backend,here it firebase
    this.http
      .put('https://recipe-book-94609.firebaseio.com/recipes.json', recipes)
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchRecipes() {
    //send a request to get our recipes
    return this.http
      .get<Recipe[]>('https://recipe-book-94609.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
    // .subscribe((recipes) => {
    //   //console.log(recipes);
    //   this.recipeService.setRecipes(recipes);
    // });
  }
  //rxjs map here in pipe helps to transform data
  //recipes.map is a normal js array method
}
