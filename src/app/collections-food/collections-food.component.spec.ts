import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsFoodComponent } from './collections-food.component';

describe('CollectionsFoodComponent', () => {
  let component: CollectionsFoodComponent;
  let fixture: ComponentFixture<CollectionsFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
