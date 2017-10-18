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
    constructionTypes = [];
    productTypes = [];
    professionTypes = [];

    constructor(private invoiceSrv : InvoiceService,
                private usrService : UserService,
                private restSrv : RestService) {
           
        Observable.forkJoin(this.restSrv.getConstructionTypes(),
                            this.restSrv.getProductTypes(),
                            this.restSrv.getProfesionTypes())
            .subscribe(
                results => {
                    console.log(results);
                    this.constructionTypes = results[0].map(this.mapToLabelValue);
                    this.productTypes = results[1].map(this.mapToLabelValue);
                    this.professionTypes = results[2].map(this.mapToLabelValue);
                    
                    console.log(this.constructionTypes);
                },
                error => {
                    console.log(error);
                }
            )

    }

    mapToLabelValue(item) {
        item.value = item.id;
        item.label = item.name;

        return item;
    }

    assignOrderToCurrentUser(orderId: number) {
        //TODO

        console.log('todo, patch or smthing');
    }

    setOrders(orders : Order[]){
        this.orders = orders;
    }

    getCachedOrders(){
        return this.orders;
    }

    getOrdersByClientId(clientId : number): Order[] {

        let orders = this.orders.filter(order=> {

            console.log(order.mainContact.id);
            if (order.mainContact ) {
                return (order.mainContact.id == clientId);
            }
            else return false;
        });

        return orders;
    }

    getOrders(page: number, pageSize: number) : Observable<any>{

        return this.restSrv.getOrders(page, pageSize);
    }

    getOrder(orderId : number) : Observable<Order> {
        return this.restSrv.getOrder(orderId);
    }

    createOrder(order : Order) : Observable<Order>{
        return this.restSrv.createOrder(order);
    }

    addFilesToOrder(orderId, files) {
        return this.restSrv.addFilesToOrder(orderId, files);
    }

    removeFile(fileId) {
        return this.restSrv.removeFile(fileId);
    }

    public getCustomersByEmail(searchString: string, users : Customer[]) : Customer[] {
        return users.filter(user => (user.mainContact.email.indexOf(searchString) > -1) ||
                                    (user.mainContact.surname.indexOf(searchString) > -1) ||
                                    (user.mainContact.name.indexOf(searchString) > -1));
    }
}