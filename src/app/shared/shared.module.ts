import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeoplePipe } from './pipes/people.pipe';
import { HeightPipe } from './pipes/height.pipe';


@NgModule({
  declarations: [PeoplePipe, HeightPipe],
  imports: [
    CommonModule
  ],
  exports: [PeoplePipe, HeightPipe]
})
export class SharedModule { }
