import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './interfaces/pessoa.interface';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {
  pessoas: Array<Pessoa> = [];

  constructor(
    protected $httpClient: HttpClient
  ) {
    this.inicializarPessoas();
  }

  // getPessoas(): any {
  //   return this.$httpClient.get('https://swapi.co/api/people/');
  // }

  inicializarPessoas(): void {
    this.pessoas.push({id: 0, name: 'Alberto', height: 180});
    this.pessoas.push({id: 1, name: 'Lucas', height: 170});
    this.pessoas.push({id: 2, name: 'Ana', height: 180});
    this.pessoas.push({id: 3, name: 'Maisa', height: 177});
    this.pessoas.push({id: 4, name: 'Rodrigo', height: 148});
    this.pessoas.push({id: 5, name: 'Ada', height: 175});
  }

  getPessoas(ordenacao?: boolean, numeroRegistros?: number): Observable<Array<Pessoa>> {
    if (ordenacao === true) {
      this.orderDataByHeight();
    } else {
      this.orderDataByName();
    }

    if (numeroRegistros) {
      return of(this.getAlgumasPessoas(numeroRegistros));
    } else {
      return of(this.pessoas);
    }
  }

  getAlgumasPessoas(numeroPessoas: number): Array<Pessoa> {
    return this.pessoas.slice(0, numeroPessoas);
  }

  criarPessoa(dados: Pessoa): Pessoa {
    if (typeof dados.id === 'undefined') {
      dados.id = this.pessoas.length;
    }
    this.pessoas.push(dados);
    return dados;
  }

  editarPessoa(dados: Pessoa) {
    dados.id = parseInt(dados.id.toString(), 10);
    const idPessoa = dados.id;
    this.pessoas = this.pessoas.map(pessoa => {
      if (pessoa.id === idPessoa) {
        return dados;
      }
      return pessoa;
    });
    this.orderDataByName();
  }

  getPessoa(id: number): Pessoa {
    return this.pessoas.find(pessoa => {
      if (pessoa.id === id) {
        return true;
      }
    });
  }

  compareByHeight(a: Pessoa, b: Pessoa) {
    if (a.height > b.height) {
      return 1;
    }
    return -1;
  }

  compareByName(a: Pessoa, b: Pessoa) {
    if (a.name > b.name) {
      return 1;
    }
    return -1;
  }

  orderDataByHeight(): void {
    this.pessoas = this.pessoas.sort(this.compareByHeight);
  }

  orderDataByName(): void {
    this.pessoas = this.pessoas.sort(this.compareByName);
  }


}
