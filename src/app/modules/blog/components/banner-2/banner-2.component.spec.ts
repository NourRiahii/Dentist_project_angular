import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banner2Component } from './banner-2.component';

describe('Banner2Component', () => {
  let component: Banner2Component;
  let fixture: ComponentFixture<Banner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Banner2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
