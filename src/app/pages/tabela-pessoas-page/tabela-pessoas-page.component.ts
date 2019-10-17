import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabela-pessoas-page',
  templateUrl: './tabela-pessoas-page.component.html',
  styleUrls: ['./tabela-pessoas-page.component.scss']
})

export class TabelaPessoasPageComponent implements OnInit, OnDestroy {
  titulo: string;
  subscriptions: Array<Subscription> = [];

  constructor(
    protected $activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getParams();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  getParams(): void {
    this.subscriptions.push(
      this.$activatedRoute.params.subscribe(resp => {
        this.titulo = resp.nomeUsuario;
      })
    );
  }

}
