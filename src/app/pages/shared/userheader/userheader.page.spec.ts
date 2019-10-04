import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserheaderPage } from './userheader.page';

describe('UserheaderPage', () => {
  let component: UserheaderPage;
  let fixture: ComponentFixture<UserheaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserheaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserheaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
