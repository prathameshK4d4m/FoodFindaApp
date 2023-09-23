import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAppStoreComponent } from './play-app-store.component';

describe('PlayAppStoreComponent', () => {
  let component: PlayAppStoreComponent;
  let fixture: ComponentFixture<PlayAppStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayAppStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayAppStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
