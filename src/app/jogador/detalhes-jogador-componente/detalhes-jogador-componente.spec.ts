import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesJogadorComponente } from './detalhes-jogador-componente';

describe('DetalhesJogadorComponente', () => {
  let component: DetalhesJogadorComponente;
  let fixture: ComponentFixture<DetalhesJogadorComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesJogadorComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesJogadorComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
