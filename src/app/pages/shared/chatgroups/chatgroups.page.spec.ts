import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatgroupsPage } from './chatgroups.page';

describe('ChatgroupsPage', () => {
  let component: ChatgroupsPage;
  let fixture: ComponentFixture<ChatgroupsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatgroupsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatgroupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
