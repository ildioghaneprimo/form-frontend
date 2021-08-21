import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenitoreComponent } from './form-genitore.component';

describe('FormGenitoreComponent', () => {
  let component: FormGenitoreComponent;
  let fixture: ComponentFixture<FormGenitoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGenitoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGenitoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
