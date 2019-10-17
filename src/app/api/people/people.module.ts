import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleTableComponent } from './people-table/people-table.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PeopleTableComponent],
  imports: [
    CommonModule
  ],
  exports: [PeopleTableComponent]
})
export class PeopleModule { }
