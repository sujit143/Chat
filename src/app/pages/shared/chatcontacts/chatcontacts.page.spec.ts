import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatcontactsPage } from './chatcontacts.page';

describe('ChatcontactsPage', () => {
  let component: ChatcontactsPage;
  let fixture: ComponentFixture<ChatcontactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatcontactsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatcontactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
