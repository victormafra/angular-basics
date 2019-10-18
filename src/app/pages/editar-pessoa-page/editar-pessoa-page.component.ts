import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa-page',
  templateUrl: './editar-pessoa-page.component.html',
  styleUrls: ['./editar-pessoa-page.component.scss']
})
export class EditarPessoaPageComponent implements OnInit {
  idPessoa: number;

  constructor(
    protected $activatedRoute: ActivatedRoute,
    protected $router: Router
  ) { }

  ngOnInit() {
    this.getParams();
  }

  getParams(): void {
    const params = this.$activatedRoute.snapshot.params;
    this.idPessoa = parseInt(params.id, 10);
  }

  navegarParaTabela(): void {
    this.$router.navigate(['tabela']);
  }

}
