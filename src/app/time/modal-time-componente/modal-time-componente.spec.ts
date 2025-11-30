import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTimeComponente } from './modal-time-componente';

describe('ModalTimeComponente', () => {
  let component: ModalTimeComponente;
  let fixture: ComponentFixture<ModalTimeComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTimeComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTimeComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
