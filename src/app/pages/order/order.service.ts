import {Injectable} from "@angular/core";
import {Order} from "./order.model";
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

    setOrders(orders : Order[]){
        this.orders = orders;
    }

    getCachedOrders(){
        return this.orders;
    }

    getOrdersByClientId(clientId : number) : Observable<Order[]>{

        let orders = this.orders.filter(order=> order.invoices[0].customer.id == clientId);
        return Observable.of(orders);
    }

    getOrders() : Observable<Order[]>{

        return this.restSrv.getOrders();
        // if (this.orders.length < 1){
        //     this.fakeData();
        // }
        // return this.restSrv.getOrders().subscribe(
        //     result=>{
        //         this.orders = result;
        //     }
        // )
        //return Observable.of(this.orders);
    }

    getOrder(orderId : number) : Order{
        return this.orders.find(order=> order.id == orderId);
    }

    createOrder(order : Order) : Observable<Order>{
        console.log("saving invoice");
        return this.restSrv.createOrder(order);
        // return this.invoiceSrv.createInvoice(order.invoice);
    }


    public getCustomersByEmail(email: string, users : Customer[]) : Customer[] {
        return users.filter(user => user.mainContact.email.indexOf(email) > -1);
    }
}