import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRestaurantsComponent } from './best-restaurants.component';

describe('BestRestaurantsComponent', () => {
  let component: BestRestaurantsComponent;
  let fixture: ComponentFixture<BestRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestRestaurantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
