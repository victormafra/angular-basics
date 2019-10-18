import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaPessoasPageComponent } from './tabela-pessoas-page/tabela-pessoas-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { EditarPessoaPageComponent } from './editar-pessoa-page/editar-pessoa-page.component';
import { AuthService } from '../api/services/auth.service';


const routes: Routes = [
  {
    path: 'tabela',
    component: TabelaPessoasPageComponent,
    canActivate: [AuthService]
  },
  {
    path: 'tabela/:nomeUsuario',
    component: TabelaPessoasPageComponent,
    canActivate: [AuthService]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'editar',
    component: EditarPessoaPageComponent,
    canActivate: [AuthService]
  },
  {
    path: 'editar/:id',
    component: EditarPessoaPageComponent,
    canActivate: [AuthService]
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
