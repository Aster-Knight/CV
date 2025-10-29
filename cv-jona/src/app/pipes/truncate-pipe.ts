import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    
    if (!value) {
      return '';
    }

    
    const limit = args[0] ? args[0] : 120;
    
    const trail = args[1] ? args[1] : '...';

    if (value.length < limit) {
      return value;
    }
    return value.substring(0, limit) + trail;
  }
}
