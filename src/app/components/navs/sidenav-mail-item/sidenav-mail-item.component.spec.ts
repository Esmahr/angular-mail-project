import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavMailItemComponent } from './sidenav-mail-item.component';

describe('SidenavMailItemComponent', () => {
  let component: SidenavMailItemComponent;
  let fixture: ComponentFixture<SidenavMailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavMailItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavMailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
