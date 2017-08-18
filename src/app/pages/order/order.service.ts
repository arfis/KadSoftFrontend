import {Injectable} from "@angular/core";
import {Order, OrderStats, OrderStatus} from "./order.model";
import {Observable} from "rxjs/Observable";
import {InvoiceService} from "../invoice/invoice.service";
import {UserService} from "../../services/user.service";
import {Invoice} from "../invoice/invoice.model";
import {Customer} from "../users/user.model";
import {RestService} from "../../services/rest.service";

/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class OrderService {

    orders : Order[] = new Array();

    constructor(private invoiceSrv : InvoiceService,
                private usrService : UserService,
                private restSrv : RestService){

    }

    assignOrderToCurrentUser(orderId: number) {
        const order = this.orders.find(order => order.id === orderId);
        order.assignedTo = this.usrService.getLoggedInUser();
        order.state = OrderStats.assigned;
    }

    setOrders(orders : Order[]){
        this.orders = orders;
    }

    getCachedOrders(){
        return this.orders;
    }

    getOrdersByClientId(clientId : number): Order[] {
        console.log('clientId: ' + clientId);
        let orders = this.orders.filter(order=> {

            console.log(order.mainContact.id);
            if (order.mainContact ) {
                return (order.mainContact.id == clientId);
            }
            else return false;
        });

        return orders;
    }

    getOrders() : Observable<Order[]>{

        return this.restSrv.getOrders();
    }

    getOrder(orderId : number) : Order {
        let foundOrder = this.orders.find(order=> order.id == orderId);

        console.log('found order: ');
        console.log(foundOrder);
        if (!foundOrder) {
            foundOrder = new Order();
            foundOrder.id = orderId;
        }
        return foundOrder;
    }

    createOrder(order : Order) : Observable<Order>{
        console.log("saving invoice");
        return this.restSrv.createOrder(order);
    }


    public getCustomersByEmail(searchString: string, users : Customer[]) : Customer[] {
        return users.filter(user => (user.mainContact.email.indexOf(searchString) > -1) ||
                                    (user.mainContact.surname.indexOf(searchString) > -1) ||
                                    (user.mainContact.name.indexOf(searchString) > -1));
    }
}