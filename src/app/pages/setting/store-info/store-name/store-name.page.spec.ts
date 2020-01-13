import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNamePage } from './store-name.page';

describe('StoreNamePage', () => {
  let component: StoreNamePage;
  let fixture: ComponentFixture<StoreNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreNamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
