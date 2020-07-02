import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  //ingredientChangedAdd = new EventEmitter<Ingredient[]>(); replace it with subject

  ingredientChangedAdd = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    //this.ingredientChangedAdd.emit(this.ingredients.slice());
    this.ingredientChangedAdd.next(this.ingredients.slice()); //subject use next to emit or sending a value
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of this.ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients); //ES6 feature spread operator trun array element into list element
    //this.ingredientChangedAdd.emit(this.ingredients.slice());
    this.ingredientChangedAdd.next(this.ingredients.slice()); //subject use next to emit or sending a value
  }
}
