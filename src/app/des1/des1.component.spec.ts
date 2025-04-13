import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Des1Component } from './des1.component';

describe('Des1Component', () => {
  let component: Des1Component;
  let fixture: ComponentFixture<Des1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Des1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Des1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
