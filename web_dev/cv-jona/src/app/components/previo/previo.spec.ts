import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Previo } from './previo';

describe('Previo', () => {
  let component: Previo;
  let fixture: ComponentFixture<Previo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Previo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Previo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
