import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  //store subscription to a property
  private igChangeSub: Subscription;

  //added ShoppingListService in app.module bcz we will use it in other service

  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();

    //getting informed that something changed
    this.igChangeSub = this.slService.ingredientChangedAdd.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }
  // OnIngAdded(ing: Ingredient) {
  //   this.ingredients.push(ing);
  // }
  onEditItem(index: number) {
    this.slService.startedEditing.next(index); //we can listen to now in shopping-edit
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
