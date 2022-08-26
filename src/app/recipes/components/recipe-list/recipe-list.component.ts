import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../../models/recipe/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() sendRecipes: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [ new Recipe('A test recipe', 'this is only test', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg'),
                        new Recipe('A recipe test 2', 'this is only the second test', 'https://www.averiecooks.com/wp-content/uploads/2021/01/garlicbutterchicken-5.jpg') ];

  constructor() {

  }

  ngOnInit(): void {
  }

  activeRecipe(current: Recipe){
    this.sendRecipes.emit(current);
  }

}
