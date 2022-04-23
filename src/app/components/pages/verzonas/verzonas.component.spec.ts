import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerzonasComponent } from './verzonas.component';

describe('VerzonasComponent', () => {
  let component: VerzonasComponent;
  let fixture: ComponentFixture<VerzonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerzonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerzonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
