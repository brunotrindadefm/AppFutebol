import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponente } from './nav-componente';

describe('NavComponente', () => {
  let component: NavComponente;
  let fixture: ComponentFixture<NavComponente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavComponente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
