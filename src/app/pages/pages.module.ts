import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TabelaPessoasPageComponent } from './tabela-pessoas-page/tabela-pessoas-page.component';
import { PeopleModule } from '../api/people/people.module';


@NgModule({
  declarations: [TabelaPessoasPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PeopleModule
  ]
})
export class PagesModule { }
