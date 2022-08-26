import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularShop';
  routingComp: boolean = true;

  catchin(event: boolean){
    this.routingComp = event;
  }

}
