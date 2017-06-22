import {Injectable, Pipe, PipeTransform} from "@angular/core";
import {InvoiceStatus} from "../../pages/invoice/InvoiceStatus.model";
/**
 * Created by a619678 on 19. 6. 2017.
 */
@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[]): any[] {
        if (!items) return [];
        return items.filter(it => it['status'] == InvoiceStatus.expired);
    }
}