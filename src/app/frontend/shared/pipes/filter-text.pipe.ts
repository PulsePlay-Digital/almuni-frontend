import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterText",
})
export class FilterTextPipe implements PipeTransform {
  transform(items: any, searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((item: any) => {
      if (item?.hasOwnProperty("title")) {
        return item?.title?.toLowerCase().includes(searchText);
      } else if (item?.hasOwnProperty('eventName')) {
        return item?.eventName?.toLowerCase().includes(searchText);
      }
    });
  }
}
