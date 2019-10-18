import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa.interface';
import { PeopleServiceService } from '../../people-service.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

interface Opcionais {
  ordenacao?: boolean;
  numeroRegistros?: number;
}
@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  @Input() tituloDaTabela = 'Tabela';

  dataSource: Array<Pessoa> = [];
  filtro: string;
  options: any;

  ordenacao: boolean;
  numeroDeDados = 4;

  protected ordenacao$ = new Subject<boolean>();
  protected numeroDeDados$ = new Subject<number>();

  constructor(
    protected $pessoaService: PeopleServiceService,
    protected $router: Router
  ) { }

  ngOnInit() {
    this.inicializaPessoas();
    this.makeSubscriptions();
  }

  makeSubscriptions(): void {
    this.ordenacao$.asObservable().subscribe(ord => {
      this.ordenacao = ord;
      this.$pessoaService.getPessoas(this.ordenacao, this.numeroDeDados).subscribe(valor => {
        this.dataSource = valor;
      });
    });
    this.numeroDeDados$.asObservable().subscribe(nd => {
      this.numeroDeDados = nd;
      this.$pessoaService.getPessoas(this.ordenacao, this.numeroDeDados).subscribe(valor => {
        this.dataSource = valor;
      });
    });
  }

  inicializaPessoas(): void {
    this.$pessoaService.getPessoas().subscribe(pessoas => {
      this.dataSource = pessoas;
    });
  }

  toggleOrdenacao() {
    if (this.ordenacao) {
      this.ordenacao$.next(false);
    } else {
      this.ordenacao$.next(true);
    }
  }

  atribuiFiltro(valorDoFiltro: string) {
    this.filtro = valorDoFiltro;
  }

  redirectToEdit(id: number) {
    this.$router.navigate(['editar', id.toString()]);
  }

  diminuiNumeroRegistros() {
    this.numeroDeDados$.next(this.numeroDeDados - 1);
  }

  aumentaNumeroRegistros() {
    this.numeroDeDados$.next(this.numeroDeDados + 1);
  }
}
