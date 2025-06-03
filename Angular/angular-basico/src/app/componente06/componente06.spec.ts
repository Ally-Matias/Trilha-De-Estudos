import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente06 } from './componente06';

describe('Componente06', () => {
  let component: Componente06;
  let fixture: ComponentFixture<Componente06>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente06]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente06);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
