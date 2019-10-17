import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height'
})
export class HeightPipe implements PipeTransform {

  transform(height: number, ...args: any[]): string {
    const heightInMeters = (height / 100);
    let heightString = heightInMeters.toFixed(2).toString();
    heightString = heightString.replace('.', ',');
    return heightString + 'm';
  }

}
