import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleTableComponent } from './people-table/people-table.component';
import { PeopleFilterComponent } from './people-filter/people-filter.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PeopleTableComponent, PeopleFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PeopleTableComponent, PeopleFilterComponent]
})
export class PeopleModule { }
