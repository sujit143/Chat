import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatcontactlsitPage } from './chatcontactlsit.page';

describe('ChatcontactlsitPage', () => {
  let component: ChatcontactlsitPage;
  let fixture: ComponentFixture<ChatcontactlsitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatcontactlsitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatcontactlsitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
