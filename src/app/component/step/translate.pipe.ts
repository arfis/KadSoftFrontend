import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch (value){
      case "draft" : return "Nepripravena";
      case "preparing" : return "Pripravovana";
      case "unassigned" : return "Nepriradena";
      case "assigned" : return "Priradena";
      case "finished" : return "Dokoncena";
      case "dispatched" : return "Odoslana";
      default: return value;
    }
  }

}
