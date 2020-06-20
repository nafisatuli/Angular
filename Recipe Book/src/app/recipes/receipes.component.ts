import { Component, OnInit } from '@angular/core';
import { Recipe } from './receipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.scss'],
  providers: [RecipeService], //providing in here bcz it is parent
})
export class ReceipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    //set up my listener
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
