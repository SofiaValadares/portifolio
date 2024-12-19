import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoUniversityComponent } from './card-info-university.component';

describe('CardInfoUniversityComponent', () => {
  let component: CardInfoUniversityComponent;
  let fixture: ComponentFixture<CardInfoUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardInfoUniversityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInfoUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
