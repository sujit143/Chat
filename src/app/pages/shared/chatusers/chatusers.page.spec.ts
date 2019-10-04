import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatusersPage } from './chatusers.page';

describe('ChatusersPage', () => {
  let component: ChatusersPage;
  let fixture: ComponentFixture<ChatusersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatusersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
