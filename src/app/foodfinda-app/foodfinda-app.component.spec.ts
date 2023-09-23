import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodfindaAppComponent } from './foodfinda-app.component';

describe('FoodfindaAppComponent', () => {
  let component: FoodfindaAppComponent;
  let fixture: ComponentFixture<FoodfindaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodfindaAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodfindaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
