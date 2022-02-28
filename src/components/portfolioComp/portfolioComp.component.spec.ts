/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortfolioCompComponent } from './portfolioComp.component';

describe('PortfolioCompComponent', () => {
  let component: PortfolioCompComponent;
  let fixture: ComponentFixture<PortfolioCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioCompComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
