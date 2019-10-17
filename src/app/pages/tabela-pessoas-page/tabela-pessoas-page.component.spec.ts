import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaPessoasPageComponent } from './tabela-pessoas-page.component';

describe('TabelaPessoasPageComponent', () => {
  let component: TabelaPessoasPageComponent;
  let fixture: ComponentFixture<TabelaPessoasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaPessoasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaPessoasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
