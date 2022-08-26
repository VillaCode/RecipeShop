import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../models/ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('refNameIn', {static: true}) nameElementIn: ElementRef;
  @ViewChild('refAmountIn', {static: true}) amountElementIn: ElementRef;
  @Output() newIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAdded(){
    this.newIngredient.emit(new Ingredient(this.nameElementIn.nativeElement.value, 
                                           this.amountElementIn.nativeElement.value));
    console.log() 
  }

}
