import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente07 } from './componente07';

describe('Componente07', () => {
  let component: Componente07;
  let fixture: ComponentFixture<Componente07>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente07]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente07);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
