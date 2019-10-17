import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa.interface';
import { PeopleServiceService } from '../../people-service.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  @Input() tituloDaTabela = 'Tabela';

  dataSource: Array<Pessoa> = [];
  filtro: string;

  //
  dataSourceFiltrada: Array<Pessoa> = [];
  //
  constructor(
    protected $pessoaService: PeopleServiceService
  ) { }

  ngOnInit() {
    this.inicializaPessoas();
  }

  inicializaPessoas(): void {
    this.dataSource = this.$pessoaService.getPessoas();
  }

  atribuiFiltro(valorDoFiltro: string) {
    this.filtro = valorDoFiltro;
  }
}
