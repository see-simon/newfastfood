/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomenavComponent } from './homenav.component';

describe('HomenavComponent', () => {
  let component: HomenavComponent;
  let fixture: ComponentFixture<HomenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
