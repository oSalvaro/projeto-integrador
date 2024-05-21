import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroGeradorEnergiaPage } from './cadastro-gerador-energia.page';

describe('CadastroGeradorEnergiaPage', () => {
  let component: CadastroGeradorEnergiaPage;
  let fixture: ComponentFixture<CadastroGeradorEnergiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroGeradorEnergiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
