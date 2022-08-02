import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './Shopping/components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Shopping/components/shopping-list-edit/shopping-list-edit.component';
import { ShopFeatureComponent } from './Shopping/features/shop-feature/shop-feature.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeItemComponent } from './recipes/components/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/components/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipes/features/recipe-book/recipe-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ShopFeatureComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
