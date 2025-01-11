import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heetmap3Component } from './heetmap3.component';

describe('Heetmap3Component', () => {
  let component: Heetmap3Component;
  let fixture: ComponentFixture<Heetmap3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Heetmap3Component]
    });
    fixture = TestBed.createComponent(Heetmap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
