import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrl: './sidenav-item.component.scss'
})
export class SidenavItemComponent {
  @Input() icon : string = "";
  @Input() name : string = "";
}
