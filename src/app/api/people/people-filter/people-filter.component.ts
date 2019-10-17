import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-people-filter',
  templateUrl: './people-filter.component.html',
  styleUrls: ['./people-filter.component.scss']
})
export class PeopleFilterComponent implements OnInit, OnDestroy {
  @Output() filtroEmitter: EventEmitter<string> = new EventEmitter<string>();

  peopleFilterForm: FormGroup;
  placeholderFiltro = 'Insira um filtro';
  filter: string;
  subscriptions: Array<Subscription> = [];

  constructor(
    protected $formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.subscribeToFilter();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  initializeForm(): void {
    this.peopleFilterForm = this.$formBuilder.group({
      filter: ['']
    });
  }

  alteracaoFiltro(valorDoFiltro: string): void {
    this.filtroEmitter.emit(valorDoFiltro);
  }

  subscribeToFilter(): void {
    this.subscriptions.push(
      this.peopleFilterForm.get('filter').valueChanges
        .pipe(debounceTime(300))
        .subscribe(filterValue => {
          this.alteracaoFiltro(filterValue);
        })
    );
  }

}
