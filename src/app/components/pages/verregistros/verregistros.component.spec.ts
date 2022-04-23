import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerregistrosComponent } from './verregistros.component';

describe('VerregistrosComponent', () => {
  let component: VerregistrosComponent;
  let fixture: ComponentFixture<VerregistrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerregistrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerregistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
