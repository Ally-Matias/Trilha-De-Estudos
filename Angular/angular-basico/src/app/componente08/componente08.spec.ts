import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente08 } from './componente08';

describe('Componente08', () => {
  let component: Componente08;
  let fixture: ComponentFixture<Componente08>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente08]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente08);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
