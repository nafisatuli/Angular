import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  //check whether we are in edit mode or not
  //retrieve the id

  id: number;
  editMode = false;

  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}
  //retrieve the id
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null; //does it have the id
      this.initForm();
    });
  }
  onSubmit() {
    console.log(this.recipeForm);
  }

  //initialize our recipe edit form
  //this method should be called when our route params will change bcz that indicate we reload the page
  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';
    if (this.editMode) {
      const recipe = this.recipeService.getSingleRecipe(this.id); //fetch recipe
      recipeName = recipe.name;
      recipeImgPath = recipe.imgPath;
      recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImgPath),
      description: new FormControl(recipeDescription),
    });
  }
}
