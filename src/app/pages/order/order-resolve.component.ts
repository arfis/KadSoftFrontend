/**
 * Created by a619678 on 23. 5. 2017.
 */
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
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

        let orderId : number = route.params['orderNumber'];

        console.log('orderId is: ' + orderId);

        if (!orderId)
            return null;

        let foundOrder = this.orderSrv.getOrder(orderId);
        console.log(foundOrder);

        return foundOrder;
    }
}