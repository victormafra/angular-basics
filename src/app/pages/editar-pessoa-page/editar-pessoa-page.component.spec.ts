import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPessoaPageComponent } from './editar-pessoa-page.component';

describe('EditarPessoaPageComponent', () => {
  let component: EditarPessoaPageComponent;
  let fixture: ComponentFixture<EditarPessoaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPessoaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPessoaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
