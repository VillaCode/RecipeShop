import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from './models/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  // @Output() editingIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  ingredientE: Ingredient;
  constructor() { }

  ngOnInit(): void {
  }

  editing(ingrediente: Ingredient){
    // this.editingIngredient.emit(ingrediente);
    console.log(ingrediente);
    this.ingredientE = ingrediente;
  }

}
