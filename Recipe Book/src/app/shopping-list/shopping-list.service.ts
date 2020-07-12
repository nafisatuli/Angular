import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  //ingredientChangedAdd = new EventEmitter<Ingredient[]>(); replace it with subject

  ingredientChangedAdd = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  //get the item which I want to edit
  getIngredient(index: number) {
    return this.ingredients[index];
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
  updateIngredient(index:number,newIng:Ingredient) {
    this.ingredients[index] = newIng;
    this.ingredientChangedAdd.next(this.ingredients.slice()); //emit updated ingredients
  }

  deleteIngredient(index:number) {
    //splice allow us to start at a specific point
    this.ingredients.splice(index, 1);
    this.ingredientChangedAdd.next(this.ingredients.slice());
  }
}
