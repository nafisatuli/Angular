import { Component, OnInit } from '@angular/core';
import { Recipe } from '../receipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.scss'],
})
export class ReceipeDetailsComponent implements OnInit {
  //@Input() recipe: Recipe; //we are not receiving the value in this way

  recipe: Recipe;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getSingleRecipe(this.id);
    });
  }
  onAddToShoppinglist() {
    this.recipeService.addIngredientsToShoppinglist(this.recipe.ingredients);
  }
  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
  }
}
