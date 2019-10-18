import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( ) { }

  login(dados: {user: string, password: string}): any {
    if (dados.user === 'aaa') {
      return undefined;
    }
    return {nome: 'Alberto', id: 1234};
  }
}
