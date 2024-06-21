import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentViewService {

  private showSidebarDescSource = new BehaviorSubject<boolean>(true);
  private showCalendarSource = new BehaviorSubject<boolean>(false);
  private showTodoSource = new BehaviorSubject<boolean>(false);

  showSidebarDesc$ = this.showSidebarDescSource.asObservable();
  showCalendar$ = this.showCalendarSource.asObservable();
  showTodo$ = this.showTodoSource.asObservable();

  setShowSidebarDesc(value: boolean) {
    this.showSidebarDescSource.next(value);
  }

  setShowCalendar(value: boolean) {
    this.showCalendarSource.next(value);
  }

  setShowTodo(value: boolean) {
    this.showTodoSource.next(value);
  }
}
