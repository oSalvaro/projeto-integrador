import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Funcionalidade1Page } from './funcionalidade1.page';

describe('Funcionalidade1Page', () => {
  let component: Funcionalidade1Page;
  let fixture: ComponentFixture<Funcionalidade1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Funcionalidade1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
