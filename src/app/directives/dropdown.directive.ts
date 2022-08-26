import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') clase: boolean = false;

  //Entonces para poder agregar una clase basta con acceder al atributo class del host
  // ponerle un punto y agregar la clase nueva, tratarla como un boolean.

  constructor() { }

  @HostListener('click') dropIt(){
    this.clase = !this.clase;
  }

}
