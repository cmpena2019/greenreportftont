import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoRecuperacionComponent } from './proceso-recuperacion.component';

describe('ProcesoRecuperacionComponent', () => {
  let component: ProcesoRecuperacionComponent;
  let fixture: ComponentFixture<ProcesoRecuperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesoRecuperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
