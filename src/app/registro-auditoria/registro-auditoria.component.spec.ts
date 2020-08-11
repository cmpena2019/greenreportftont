import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAuditoriaComponent } from './registro-auditoria.component';

describe('RegistroAuditoriaComponent', () => {
  let component: RegistroAuditoriaComponent;
  let fixture: ComponentFixture<RegistroAuditoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAuditoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAuditoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
