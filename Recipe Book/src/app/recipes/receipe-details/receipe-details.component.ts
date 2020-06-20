import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.scss'],
})
export class ReceipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}
  onAddToShoppinglist() {
    this.recipeService.addIngredientsToShoppinglist(this.recipe.ingredients);
  }
}
