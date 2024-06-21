import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-dropdown',
  templateUrl: './sidenav-dropdown.component.html',
  styleUrl: './sidenav-dropdown.component.scss'
})
export class SidenavDropdownComponent {
  @Input() icon : string = "";
  @Input() name : string = "";
  @Input() id : string = "";

  @Input() item1 : string = "";
  @Input() item2 : string = "";
  @Input() item3 : string = "";
}
