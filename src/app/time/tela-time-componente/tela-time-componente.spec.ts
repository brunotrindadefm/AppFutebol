import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaTimeComponente } from './tela-time-componente';

describe('TelaTimeComponente', () => {
  let component: TelaTimeComponente;
  let fixture: ComponentFixture<TelaTimeComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaTimeComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaTimeComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
