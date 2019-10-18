import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleTableComponent } from './people-table/people-table.component';
import { PeopleFilterComponent } from './people-filter/people-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { PeopleFormComponent } from './people-form/people-form.component';



@NgModule({
  declarations: [PeopleTableComponent, PeopleFilterComponent, PeopleFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [PeopleTableComponent, PeopleFilterComponent, PeopleFormComponent]
})
export class PeopleModule { }
