import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubComponent } from './pub.component';

describe('PubComponent', () => {
  let component: PubComponent;
  let fixture: ComponentFixture<PubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
