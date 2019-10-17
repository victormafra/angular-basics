import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-people-filter',
  templateUrl: './people-filter.component.html',
  styleUrls: ['./people-filter.component.scss']
})
export class PeopleFilterComponent implements OnInit {
  peopleFilterForm: FormGroup;
  placeholderFiltro = 'Insira um filtro';

  constructor(
    protected $formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.peopleFilterForm = this.$formBuilder.group({
      filter: ['Filtrooo']
    });
  }

}
