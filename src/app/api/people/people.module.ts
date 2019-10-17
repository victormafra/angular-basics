import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleTableComponent } from './people-table/people-table.component';
import { PeopleFilterComponent } from './people-filter/people-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [PeopleTableComponent, PeopleFilterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [PeopleTableComponent, PeopleFilterComponent]
})
export class PeopleModule { }
