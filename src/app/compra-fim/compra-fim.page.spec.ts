import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraFimPage } from './compra-fim.page';

describe('CompraFimPage', () => {
  let component: CompraFimPage;
  let fixture: ComponentFixture<CompraFimPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompraFimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
