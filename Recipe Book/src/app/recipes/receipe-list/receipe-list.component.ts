import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss'],
})
export class ReceipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // using receipe.model.ts class
  recipes: Recipe[] = [
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
  constructor() {}

  ngOnInit(): void {}

  OnRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
