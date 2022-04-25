import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarzonaComponent } from './registrarzona.component';

describe('RegistrarzonaComponent', () => {
  let component: RegistrarzonaComponent;
  let fixture: ComponentFixture<RegistrarzonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarzonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarzonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
