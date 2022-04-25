import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrasensorComponent } from './registrasensor.component';

describe('RegistrasensorComponent', () => {
  let component: RegistrasensorComponent;
  let fixture: ComponentFixture<RegistrasensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrasensorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrasensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
