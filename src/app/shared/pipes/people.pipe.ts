import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'people'
})
export class PeoplePipe implements PipeTransform {

  transform(value: any, filtro: string): any {
    if (filtro) {
      const arrayDePessoaFiltrado = value.filter(item => {
        return item.name.toLowerCase().includes(filtro.toLowerCase());
      });
      return arrayDePessoaFiltrado;
    }
    return value;
  }

}
