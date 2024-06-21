import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-mail-item',
  templateUrl: './sidenav-mail-item.component.html',
  styleUrl: './sidenav-mail-item.component.scss'
})
export class SidenavMailItemComponent {
  @Input() mail : string = "";
  @Input() color : string = "";
}
