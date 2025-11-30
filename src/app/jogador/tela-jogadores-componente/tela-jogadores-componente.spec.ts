import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaJogadoresComponente } from './tela-jogadores-componente';

describe('TelaJogadoresComponente', () => {
  let component: TelaJogadoresComponente;
  let fixture: ComponentFixture<TelaJogadoresComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaJogadoresComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaJogadoresComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
