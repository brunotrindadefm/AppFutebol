import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJogadorComponente } from './modal-jogador-componente';

describe('ModalJogadorComponente', () => {
  let component: ModalJogadorComponente;
  let fixture: ComponentFixture<ModalJogadorComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalJogadorComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalJogadorComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
