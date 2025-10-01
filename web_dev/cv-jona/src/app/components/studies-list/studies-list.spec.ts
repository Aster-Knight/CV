import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesList } from './studies-list';

describe('StudiesList', () => {
  let component: StudiesList;
  let fixture: ComponentFixture<StudiesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudiesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudiesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
