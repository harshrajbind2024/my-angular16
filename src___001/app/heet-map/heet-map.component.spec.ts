import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeetMapComponent } from './heet-map.component';

describe('HeetMapComponent', () => {
  let component: HeetMapComponent;
  let fixture: ComponentFixture<HeetMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeetMapComponent]
    });
    fixture = TestBed.createComponent(HeetMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
