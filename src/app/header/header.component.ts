import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;
  @Output() switcherRS = new EventEmitter<boolean>();

  constructor() {
    
  }

  ngOnInit(): void {
  }

  switcher(data: boolean){
    this.switcherRS.emit(data);
  }






}
