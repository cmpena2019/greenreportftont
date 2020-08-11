import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaRecuperacionComponent } from './auditoria-recuperacion.component';

describe('AuditoriaRecuperacionComponent', () => {
  let component: AuditoriaRecuperacionComponent;
  let fixture: ComponentFixture<AuditoriaRecuperacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaRecuperacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaRecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
