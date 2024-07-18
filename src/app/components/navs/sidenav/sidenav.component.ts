import { Component } from '@angular/core';
import { ComponentViewService } from '../../../../services/component-view.service';

@Component({
  selector: 'app-sidenav',
  template: `<div class="sidebar flex-shrink-0 p-3">
  <div class="items d-flex fixed-top align-items-center pb-2 pt-2 mb-2 link-body-emphasis text-decoration-none border-bottom bg-white border-end"style="width: 180px;">
      <i class='bx bx-envelope bg-warning' style='color:#ffffff' (click)="toggleIcon('mail')"></i>
      <i class='bx bxs-calendar bg-info' style='color:#ffffff' (click)="toggleIcon('calendar')"></i>
      <i class='bx bx-task bg-success' style='color:#ffffff'(click)="toggleIcon('todo')"></i>
  </div>
  <ul class="list-unstyled ps-0 pt-5 pb-5">
     <span [ngClass]="{'d-block': showSidebarDesc, 'd-none': !showSidebarDesc}">
      <app-sidenav-dropdown name="Gelen Kutusu" icon="bxs-inbox" item1="Hepsi" item2="Okunanlar"item3="Okunmayanlar" id="1"></app-sidenav-dropdown>
      <app-sidenav-item name="Yıldızlı" icon="bx-star"></app-sidenav-item>  
      <app-sidenav-item name="Gönderilenler" icon="bx-send"></app-sidenav-item>  
      <app-sidenav-item name="Taslak" icon="bx-note"></app-sidenav-item>
      <app-sidenav-item name="Spam" icon="bx-error"></app-sidenav-item>
      <app-sidenav-item name="Çöp Kutusu" icon=""></app-sidenav-item>
      <app-sidenav-item name="Önemli" icon="bxs-bookmarks"></app-sidenav-item>
      <app-sidenav-item name="Sohbetler" icon="bx-conversation"></app-sidenav-item>
      <app-sidenav-item name="Zamanlanmış" icon="bxs-timer"></app-sidenav-item>
      <app-sidenav-item name="Ertelenenler" icon="bx-time-five"></app-sidenav-item>
      <app-sidenav-dropdown name="Kategoriler" icon="bx-category" item1="Hepsi" item2="Okunanlar"item3="Okunmayanlar" id="2"></app-sidenav-dropdown>

      <li class="border-bottom mb-2"></li>
     </span>
     
      <app-sidenav-mail-item color="bg-info-subtle" mail="Tümü"></app-sidenav-mail-item>
      <app-sidenav-mail-item color="bg-danger-subtle" mail="smhrmncgmail.com"></app-sidenav-mail-item>
      <app-sidenav-mail-item color="bg-success-subtle" mail="esmahrgmail.com"></app-sidenav-mail-item>

      <li class="pb-2 fixed-bottom border-end setting" style="width: 180px;">
          <div class="border-bottom mb-1"></div>
          <button class="btn align-items-center rounded border-0" style="width: 180px;" [routerLink]="['/setting']"><i class='bx bx-cog me-1'></i>Ayarlar</button>
      </li>
  </ul>
</div>`,
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
