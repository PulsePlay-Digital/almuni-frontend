import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  // transform(value: string, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: string, ...args: unknown[]): any {
    return value.replace(/<.*?>/g, ''); // replace tags
}


}
