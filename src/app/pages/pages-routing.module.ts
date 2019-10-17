import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaPessoasPageComponent } from './tabela-pessoas-page/tabela-pessoas-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  {
    path: 'tabela',
    component: TabelaPessoasPageComponent
  },
  {
    path: 'tabela/:nomeUsuario',
    component: TabelaPessoasPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
