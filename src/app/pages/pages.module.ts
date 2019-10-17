import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TabelaPessoasPageComponent } from './tabela-pessoas-page/tabela-pessoas-page.component';
import { PeopleModule } from '../api/people/people.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginModule } from '../api/login/login.module';


@NgModule({
  declarations: [TabelaPessoasPageComponent, LoginPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    PeopleModule,
    LoginModule
  ]
})
export class PagesModule { }
