import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDescComponent } from './sidenav-desc.component';

describe('SidenavDescComponent', () => {
  let component: SidenavDescComponent;
  let fixture: ComponentFixture<SidenavDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
