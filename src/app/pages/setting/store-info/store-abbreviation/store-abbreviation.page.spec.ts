import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAbbreviationPage } from './store-abbreviation.page';

describe('StoreAbbreviationPage', () => {
  let component: StoreAbbreviationPage;
  let fixture: ComponentFixture<StoreAbbreviationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAbbreviationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAbbreviationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
