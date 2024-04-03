import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Funcionalidade2Page } from './funcionalidade2.page';

describe('Funcionalidade2Page', () => {
  let component: Funcionalidade2Page;
  let fixture: ComponentFixture<Funcionalidade2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Funcionalidade2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
