import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComprarEnergiaPage } from './comprar-energia.page';

describe('ComprarEnergiaPage', () => {
  let component: ComprarEnergiaPage;
  let fixture: ComponentFixture<ComprarEnergiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComprarEnergiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
