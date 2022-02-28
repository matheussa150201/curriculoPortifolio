/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardAcademmicoComponent } from './card-academmico.component';

describe('CardAcademmicoComponent', () => {
  let component: CardAcademmicoComponent;
  let fixture: ComponentFixture<CardAcademmicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAcademmicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAcademmicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
