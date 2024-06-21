import { Component, OnInit } from '@angular/core';
import { ComponentViewService } from '../../../services/component-view.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  showSidebarDesc: boolean = false;

  constructor(private sharedService: ComponentViewService) {}

  ngOnInit() {
    this.sharedService.showSidebarDesc$.subscribe(value => {
      this.showSidebarDesc = value;
      console.log('showSidebarDesc:', value);
    });

    this.sharedService.showCalendar$.subscribe(value => {
      console.log('showCalendar:', value);
    });

    this.sharedService.showTodo$.subscribe(value => {
      console.log('showTodo:', value);
    });
  }
}