import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemGeradorPage } from './listagem-gerador.page';

describe('ListagemGeradorPage', () => {
  let component: ListagemGeradorPage;
  let fixture: ComponentFixture<ListagemGeradorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListagemGeradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
