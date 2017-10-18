/**
 * Created by a619678 on 23. 5. 2017.
 */
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Injectable} from "@angular/core";
import {OrderService} from "./order.service";
import {Order} from "./order.model";
import {Observable} from "rxjs/Observable";
/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class OrderResolve implements Resolve<Order> {

    constructor(private orderSrv: OrderService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Order>{

        let orderId : number = route.params['orderNumber'];

        if (!orderId)
            return null;

        return this.orderSrv.getOrder(orderId);
    }
}