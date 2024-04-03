import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Funcionalidade3Page } from './funcionalidade3.page';

describe('Funcionalidade3Page', () => {
  let component: Funcionalidade3Page;
  let fixture: ComponentFixture<Funcionalidade3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Funcionalidade3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
