import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss'],
})
export class ReceipeListComponent implements OnInit {
  //@Output() recipeWasSelected = new EventEmitter<Recipe>();
  // using receipe.model.ts class
  recipes: Recipe[]; //initially undefined

  //inject our service
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipe(); //will get copy of the recipe array
  }

  // OnRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
