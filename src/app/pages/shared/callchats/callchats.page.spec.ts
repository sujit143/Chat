import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallchatsPage } from './callchats.page';

describe('CallchatsPage', () => {
  let component: CallchatsPage;
  let fixture: ComponentFixture<CallchatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallchatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallchatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
