import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../interfaces/pessoa.interface';
import { PeopleServiceService } from '../../people-service.service';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  dataSource: Array<Pessoa> = [];
  constructor(
    protected $pessoaService: PeopleServiceService
  ) { }

  ngOnInit() {
    this.inicializaPessoas();
  }

  inicializaPessoas(): void {
    this.$pessoaService.getPessoas().subscribe((resp: {results: Array<Pessoa>}) => {
      console.log(resp);
      this.dataSource = resp.results;
    });
  }

}
