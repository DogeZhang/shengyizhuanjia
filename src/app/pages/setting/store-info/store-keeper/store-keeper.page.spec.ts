import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreKeeperPage } from './store-keeper.page';

describe('StoreKeeperPage', () => {
  let component: StoreKeeperPage;
  let fixture: ComponentFixture<StoreKeeperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreKeeperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreKeeperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
