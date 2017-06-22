import {Injectable} from "@angular/core";
import {Order} from "./order.model";
import {Observable} from "rxjs/Observable";
import {InvoiceService} from "../invoice/invoice.service";
import {UserService} from "../../services/user.service";

/**
 * Created by a619678 on 23. 5. 2017.
 */
@Injectable()
export class OrderService {

    orders : Order[] = new Array();

    constructor(private invoiceSrv : InvoiceService,
                private usrService : UserService){
        if(!this.orders) {
            this.fakeData();
        }
    }

    fakeData(){
        console.log("faking data");

        for (let i=0;i<400;i++){
            let order = new Order();

            order.id = i;

            this.usrService.currentUser.subscribe(
                user=>{
                    // order.createdBy = user;
                }
            );

            order.description = "dsadsaa";
            this.invoiceSrv.getInvoice(i).subscribe(
                invoice => {
                    order.invoice = invoice;
                }
            )

            order.createdBy = this.usrService.getLoggedInUser();
            order.created = new Date();

            this.orders.push(order);
        }
    }

    getOrdersByClientId(clientId : number) : Observable<Order[]>{

        let orders = this.orders.filter(order=> order.invoice.client.id == clientId);
        return Observable.of(orders);
    }

    getOrders() : Observable<Order[]>{
        if (this.orders.length < 1){
            this.fakeData();
        }
        return Observable.of(this.orders);
    }

    getOrder(orderId : number) : Order{
        return this.orders.find(order=> order.id == orderId);
    }

    createOrder(order : Order) : Observable<Order>{

        this.orders.push(order);

        return Observable.of(order);
    }
}