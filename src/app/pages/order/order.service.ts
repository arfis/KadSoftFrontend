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
    states = [];

    directions = ['asc', 'desc'];

    activePage;
    pageSize;

    activeSort = '';
    activeDirection = this.directions[0];

    constructor(private invoiceSrv : InvoiceService,
                private usrService : UserService,
                private restSrv : RestService) {
           
        Observable.forkJoin(this.restSrv.getConstructionTypes(),
                            this.restSrv.getProductTypes(),
                            this.restSrv.getProfesionTypes(),
                            this.restSrv.getOrderStates())
            .subscribe(
                results => {
                    this.constructionTypes = results[0].map(this.mapToLabelValue);
                    this.productTypes = results[1].map(this.mapToLabelValue);
                    this.professionTypes = results[2].map(this.mapToLabelValue);
                    this.states = results[3];


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

    }

    setOrders(orders : Order[]){
        this.orders = orders;
    }

    setAsignedTo(order, id) {
        return this.restSrv.patchOrder(order, id);
    }

    getCachedOrders(){
        return this.orders;
    }

    getOrdersByClientId(clientId : number): Order[] {

        let orders = this.orders.filter(order=> {

            if (order.mainContact ) {
                return (order.mainContact.id == clientId);
            }
            else return false;
        });

        return orders;
    }

    getOrders(params) : Observable<any>{

        console.log('get orders: ', params);
        const {page, pageSize, sort, sortOrientation, filterType, filter, keyword, user, webOnly} = params.payload;
        return this.restSrv.getOrders(page, pageSize, sort, sortOrientation, filterType, filter, keyword, user, webOnly,
            this.usrService.isDealer());
    }

    getOrder(orderId : number) : Observable<Order> {
        return this.restSrv.getOrder(orderId);
    }

    createOrder(order : Order) : Observable<Order>{
        return this.restSrv.createOrder(order);
    }

    addFilesToOrder(orderId, files): Observable<Order> {
        return this.restSrv.addFilesToOrder(orderId, files);
    }

    removeFile(fileId) {
        return this.restSrv.removeFile(fileId);
    }

    public patchOrder(order, id) {
        return this.restSrv.patchOrder(order, id);
    }

    public getCustomersByEmail(searchString: string, users : Customer[]) : Customer[] {
        return users.filter(user => (user.mainContact.email.indexOf(searchString) > -1) ||
                                    (user.mainContact.surname.indexOf(searchString) > -1) ||
                                    (user.mainContact.name.indexOf(searchString) > -1));
    }


    public updateOrder(order) {

        return this.restSrv.updateOrder(order);
    }
}