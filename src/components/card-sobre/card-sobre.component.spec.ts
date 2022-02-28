/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardSobreComponent } from './card-sobre.component';

describe('CardSobreComponent', () => {
  let component: CardSobreComponent;
  let fixture: ComponentFixture<CardSobreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSobreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
