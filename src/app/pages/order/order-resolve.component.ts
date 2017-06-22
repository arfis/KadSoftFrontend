/**
 * Created by a619678 on 23. 5. 2017.
 */
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {Invoice} from "./invoice.model";
import {InvoiceService} from "./invoice.service";
import {OrderService} from "./order.service";
import {Order} from "./order.model";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class OrderResolve implements Resolve<Order> {

    constructor(private orderSrv: OrderService) {
    }

    resolve(route: ActivatedRouteSnapshot) {

        let orderId : number = route.params['orderId'];
        console.log("order id: ");
        console.log(orderId);

        if (!orderId)
            return null;

        return this.orderSrv.getOrder(orderId);
    }
}