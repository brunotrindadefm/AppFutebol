import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponente } from './aside-componente';

describe('AsideComponente', () => {
  let component: AsideComponente;
  let fixture: ComponentFixture<AsideComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
