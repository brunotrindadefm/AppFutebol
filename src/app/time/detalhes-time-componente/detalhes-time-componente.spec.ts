import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesTimeComponente } from './detalhes-time-componente';

describe('DetalhesTimeComponente', () => {
  let component: DetalhesTimeComponente;
  let fixture: ComponentFixture<DetalhesTimeComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesTimeComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesTimeComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
