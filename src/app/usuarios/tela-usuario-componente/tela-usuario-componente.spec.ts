import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaUsuarioComponente } from './tela-usuario-componente';

describe('TelaUsuarioComponente', () => {
  let component: TelaUsuarioComponente;
  let fixture: ComponentFixture<TelaUsuarioComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaUsuarioComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaUsuarioComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
