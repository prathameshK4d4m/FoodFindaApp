import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchesComponent } from './quick-searches.component';

describe('QuickSearchesComponent', () => {
  let component: QuickSearchesComponent;
  let fixture: ComponentFixture<QuickSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickSearchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
