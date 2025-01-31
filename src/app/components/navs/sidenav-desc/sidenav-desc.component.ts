import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-desc',
  template: `<div class="d-flex operations">
  <input class="form-check-input ms-3" type="checkbox" [checked]="allChecked" (change)="toggleAllChecks($event)"
      id="flexCheckDefault">
  <i class='bx bx-refresh ms-2' [class.rotate]="isRotating" (click)="rotateIcon()" style='font-size: 24px;'></i>
  <span [ngClass]="{'d-block': operationCheck, 'd-none': !operationCheck}">
      <i class='bx bx-error ms-2 mt-1' style='font-size: 18px;'></i>
      <i class='bx bx-trash ms-2 mt-1' style='font-size: 18px;'></i>
      <i class='bx bxs-bookmarks ms-2 mt-1' style='font-size: 18px;'></i>
      <i class='bx bx-archive-out ms-2 mt-1' style='font-size: 18px;'></i>
  </span>
</div>
<ul class="list-unstyled pb-5">
  <li *ngFor="let _ of [1, 2, 3, 4, 5, 6, 7, 8]; let i = index" [class.checked]="isChecked[i]">
      <div class="container">
          <div class="row">
              <div class="col-2 p-0 name-surname">
                  <div class="profile" *ngIf="!isChecked[i]">eh</div>
                  <input class="form-check-input list-check ms-3 mt-3" type="checkbox" value=""
                      [checked]="isChecked[i]" (change)="toggleCheck(i)">
              </div>
              <div class="col-10">
                  <div class="name">Esma Harmancı</div>
                  <div class="container pe-0">
                      <div class="row">
                          <div class="col-9 p-0 mail-description">Staj Başvurusu</div>
                          <div class="col-3 p-0 date pt-2">15:02 Pzt</div>
                      </div>
                  </div>
                  <div class="mail-content-desc">Lorem ipsum dolor Lorem, ipsum. Lorem ipsum dolor Lorem, ipsum.</div>
              </div>
          </div>
      </div>
  </li>
</ul>`,
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