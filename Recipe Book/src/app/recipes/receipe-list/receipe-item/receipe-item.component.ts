import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../receipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss'],
})
export class ReceipeItemComponent implements OnInit {
  @Input() recipe: Recipe; //Input allows us to bind this component from outside
  //@Output() recipeSelected = new EventEmitter<void>(); //Output allows listenable from outside

  //Injecting RecipeService
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  onSelectItem() {
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
