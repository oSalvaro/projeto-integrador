import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemVendaPage } from './listagem-venda.page';

describe('ListagemVendaPage', () => {
  let component: ListagemVendaPage;
  let fixture: ComponentFixture<ListagemVendaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemVendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
