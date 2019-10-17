import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleServiceService {

  constructor(
    protected $httpClient: HttpClient
  ) { }

  getPessoas(): any {
    return this.$httpClient.get('https://swapi.co/api/people/');
  }

  // getPessoas(): Array<Pessoa> {
  //   const pessoas: Array<Pessoa> = [];
  //   pessoas.push({name: 'Alberto', height: 180});
  //   pessoas.push({name: 'Lucas', height: 170});
  //   pessoas.push({name: 'Rodrigo', height: 148});
  //   pessoas.push({name: 'Ada', height: 175});
  //   return pessoas;
  // }


}
