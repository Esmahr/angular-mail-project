import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-desc',
  templateUrl: './sidenav-desc.component.html',
  styleUrl: './sidenav-desc.component.scss'
})
export class SidenavDescComponent {
  isChecked = Array(8).fill(false);
  allChecked = false;
  isRotating = false;
  operationCheck = false;

  toggleCheck(index: number) {
    this.isChecked[index] = !this.isChecked[index];
    this.logIfAnyChecked();
  }

  toggleAllChecks(event: any) {
    const checked = event.target.checked;
    this.allChecked = checked;
    this.isChecked.fill(checked);
    this.logIfAnyChecked();
  }

  rotateIcon() {
    this.isRotating = true;
    setTimeout(() => this.isRotating = false, 1000); // 1 saniye sonra animasyonu durdurur
  }

  private logIfAnyChecked() {
    if (this.isChecked.some(value => value)) {
      console.log('evet');
      this.operationCheck = true;
    } else {
      this.operationCheck = false;
    }
  }
}