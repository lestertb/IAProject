import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractIAComponent } from './interact-ia.component';

describe('InteractIAComponent', () => {
  let component: InteractIAComponent;
  let fixture: ComponentFixture<InteractIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractIAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
