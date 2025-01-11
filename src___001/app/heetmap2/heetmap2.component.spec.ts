import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Heetmap2Component } from './heetmap2.component';

describe('Heetmap2Component', () => {
  let component: Heetmap2Component;
  let fixture: ComponentFixture<Heetmap2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Heetmap2Component]
    });
    fixture = TestBed.createComponent(Heetmap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
