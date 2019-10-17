import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabelaPessoasPageComponent } from './tabela-pessoas-page/tabela-pessoas-page.component';


const routes: Routes = [
  {
    path: 'tabela',
    component: TabelaPessoasPageComponent
  },
  {
    path: '**',
    redirectTo: 'tabela'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
