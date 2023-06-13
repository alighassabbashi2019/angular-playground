import { Pipe, PipeTransform } from '@angular/core';
import * as jalali from 'jalali-moment'

@Pipe({
  name: 'toJalali'
})
export class ToJalaliPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    const jalaliDate = jalali(value).locale('fa').format('YYYY/MM/DD و ساعت HH:mm:ss');
    return jalaliDate;
  }

}
