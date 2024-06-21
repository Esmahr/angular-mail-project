import { Component } from '@angular/core';
import { ComponentViewService } from '../../../../services/component-view.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  constructor(private sharedService: ComponentViewService) {}
  showSidebarDesc: boolean = true;

  toggleIcon(icon: string) {
    if (icon === 'calendar') {
      this.sharedService.setShowSidebarDesc(false);
      this.sharedService.setShowTodo(false);
      this.sharedService.setShowCalendar(true);
      this.showSidebarDesc= false;
    } else if(icon === 'todo'){
      this.sharedService.setShowSidebarDesc(false);
      this.sharedService.setShowCalendar(false);
      this.sharedService.setShowTodo(true);
      this.showSidebarDesc= false;
    } else {
      this.sharedService.setShowSidebarDesc(true);
      this.sharedService.setShowCalendar(false);
      this.sharedService.setShowTodo(false);
      this.showSidebarDesc= true;
    }
  }
}
