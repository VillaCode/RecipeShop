import { Component, Input, OnChanges, OnInit} from '@angular/core';
import { Ingredient } from '../../models/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnChanges {

  ingredients: Ingredient[] = [(new Ingredient("Apples", 5)), (new Ingredient("Oranges", 3))];
  @Input() newIngredient: Ingredient;

  constructor() { }

  ngOnChanges(){
    if(this.newIngredient){ 
      this.ingredients.push(this.newIngredient);
    }
  }

  ngOnInit(): void {
  }

  

}
