import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcomponentComponent } from './dashcomponent.component';

describe('DashcomponentComponent', () => {
  let component: DashcomponentComponent;
  let fixture: ComponentFixture<DashcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
