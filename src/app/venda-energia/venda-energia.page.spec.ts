import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendaEnergiaPage } from './venda-energia.page';

describe('VendaEnergiaPage', () => {
  let component: VendaEnergiaPage;
  let fixture: ComponentFixture<VendaEnergiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VendaEnergiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
