import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBookPage } from './edit-book.page';

describe('EditBookPage', () => {
  let component: EditBookPage;
  let fixture: ComponentFixture<EditBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
