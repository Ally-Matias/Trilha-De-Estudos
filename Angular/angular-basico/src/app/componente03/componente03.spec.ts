import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente03 } from './componente03';

describe('Componente03', () => {
  let component: Componente03;
  let fixture: ComponentFixture<Componente03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente03]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente03);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
